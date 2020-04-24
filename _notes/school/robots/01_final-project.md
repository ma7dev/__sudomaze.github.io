## Final Project

### Instructions

* Code A*
* Download world.csvPreview the document
* Write a program to create a 4-connected graph and run an A* search from vertex (0,0) to vertex (19,19) across the obstacle map provided in world.csv.
* The world is a 20×20 grid of cells
* The world.csv file is an occupancy grid map: 1 means the grid cell is occupied and you can’t move through it
* Edge costs are 1
* Your code should output the final path (either plot it or print out the vertex coordinates) and associated path cost.
* Comment your code to demonstrate that you understand the algorithm.
* What to turn in:
    * A zip file of your commented A* code including world.csv.
    * A cover sheet (PDF) listing:
    * Web sites you used
    * People you worked with
    * The final path
    * Your heuristic function (in English)
    * How you implemented the graph and priority queue
    * Any known bugs/issues

A few notes:

* 4-connected means that you can travel from a cell to any of the cardinal neighbors (north, south, east, west).
* Broadly speaking, there are two ways you can represent the graph
* As an adjacency matrix with a function that returns valid neighbors for a given vertex when queried, or
* As a list of vertices and a list of edges.
* You need to demonstrate that you understand how the algorithm works and the best way to do this is to comment relevant lines of code. Marks will be awarded accordingly.
* There are plenty of resources are available to you online, you may take inspiration from existing implementations that you find, but see Note 3 above.

### Rubric and Grade

{:#table-1 }
| Criteria                                                                                                             | Ratings                   |                       | Pts   |
|----------------------------------------------------------------------------------------------------------------------|---------------------------|-----------------------|-------|
| Sends waypoints to the robot                                                                                         | 3\.0 pts   Full Marks     | 0\.0  pts  No Marks   | 3\.0  |
| Uses SLAM to create a map                                                                                            | 3\.0  pts  Full Marks     | 0\.0   pts   No Marks | 3\.0  |
| Has a documented exploration strategy                                                                                | 7\.0    pts    Full Marks | 0\.0   pts   No Marks | 7\.0  |
| Strategy works in all world files \(entire space visited\)                                                           | 7\.0    pts    Full Marks | 0\.0   pts   No Marks | 7\.0  |
| Mechanism for detecting unexplored area                                                                              | 5\.0  pts  Full Marks     | 0\.0   pts   No Marks | 5\.0  |
| Mechanism for detecting when exploration strategy fails  Failure case: didn't get to way point, what do you do next? | 7\.0   pts   Full Marks   | 0\.0   pts   No Marks | 7\.0  |
| Algorithm/strategy for getting to unexplored area                                                                    | 3\.0   pts   Full Marks   | 0\.0   pts   No Marks | 3\.0  |
| Behaves "reasonably" on other test worlds  Doesn't crash, makes some attempt to navigate to unexplored areas         | 5\.0  pts  Full Marks     | 0\.0   pts   No Marks | 5\.0  |
| Total Points:                                                                                                        |                           |                       | 40\.0 |

<strong>Table 1:</strong> Rubric and Grade

### Report

#### Discussion of the exploration problem

In this problem we are designing an exploration package utilizing the gmapping and nav_bundle packages to allow a simulated robot to explore an unknown environment. Our algorithm will have to set waypoints to move our robot towards the unexplored areas while avoiding obstacles. The robot should be reasonably robust to noisy odometry and mapping data, and it should be able to recognize when waypoints cannot be reached.

#### Discussion of your gmapping and nav_bundle package implementations

From the gmapping bundle we are only using the occupancy grid. This grid is used to find "frontier" points (points between explored and unexplored areas). We are also reading the map meta data which gives us the resolution of the occupancy grid in meters/pixel. This gives us the ability to transform the occupancy grid data into Cartesian coordinates. The map is also saved when a waypoint is generated and used to verify that the robot is staying in known areas only, ensuring that the robot doesn't run into walls even if it didn't know about them before it calculated it's path.

From the nav_bundle package, we are using the waypoint commands: twist, base_link_goal, path_reset, move_base_cancel, and ready_pub.  Clear and cancel are used to have the robot only pursue a single waypoint at a time.  Waypoints generated using the occupancy grid which are then translated and rotated into the robot's local coordinate system then set as a waypoint using Twist.

#### Discussion of your waypoint allocation algorithm

Waypoints are generated procedurally using an 61x61 filter that scans the frontier points on the occupancy grid. The robot's exploration policy defines frontier points as being known unoccupied locations where the robot would end near unknown locations. This filter only selects points that are centered on an explored point, have no obstacles within a specified distance from the center, have a threshold percentage of unexplored cells, and aren't where the robot has been before. These cells are then weighted by the percentage of unknown cells and euclidean distance from the robot. It then uses an A* algorithm to determine if there is a known path from the current location to the candidate location. Validating the path allows the robot to exclude candidate points that would be outside of the map or within obstacles. 

If the robot enters a region that was unexplored when the waypoint was \textit{created}, it will clear the waypoint queue, cancel the current waypoint, turn 360 degrees, back up 1.5m, and generate a new waypoint. With the current implementation of the nav_bundle, the robot can select paths that pass through unknown locations. If the robot then passes though the unknown location and discovers that there is a wall blocking the path, the robot will not reroute in order to find the proper path. Instead, the robot will simply crash into the wall. To prevent incorrect path planning through unknown locations, we save how the map looked when the nav_bundle chose that path, and tell the robot to stop and reroute if we reach a location that was previously unknown, making our robot's path robust to new information.

{% include built-in/pcode.html id="1" code="
\begin{algorithm}
\caption{FindNextWaypoint}
\begin{algorithmic}
\Procedure{FindNextWaypoint}{$map$, $window\_size$, $stride\_length$, $visited\_locations$, $robot\_loc$, $avoidance\_radius$, $empty\_radius$, $RESOLUTION$}

\State $potential\_candidates \gets \text{[]}$

\For{\textbf{every} $center\_cell \textbf{ in } map \textbf{ that is greater than } stride\_length$ \textbf{apart from each other}}
    % if the center and the surrounding cells are not empty:
    %   continue
    \State $skip \gets false$
    \For{\textbf{every} $neighbor\_cell$\textbf{ in a }$avoidance\_radius$\textbf{ away from }$center\_cell$}
        \If {alreadyVisited($visited\_location$, $neighbor\_cell$)}
            \State $skip \gets true$
            \State \textbf{break}
        \EndIf
    \EndFor
    \If {$skip == true$}
        \State \textbf{continue}
    \EndIf
    \For{\textbf{every} $neighbor\_cell$\textbf{ in a }$empty\_radius$\textbf{ away from }$center\_cell$}
        \If {getMapValue($visited\_location$) $\neq$ $0$}
            \State $skip \gets true$
            \State \textbf{break}
        \EndIf
    \EndFor
    \If {$skip == true$}
        \State \textbf{continue}
    \EndIf
    
    \State $cell\_sum \gets \text{sum(all cells within } window\_size/2 \text{ from } center\_cell \text{)}$
	
	\State $potential\_candidates\text{.append(}center\_cell\text{)}$
\EndFor

\State $candidate \gets \text{sorted(}potential\_candidates\text{)} $
\State $candidate \gets  potential\_candidates\text{.pop()} $
\While{$\textbf{not } \text{reachableByAStar(} robot\_loc, candidate\text{)}$}
    \State $candidate \gets  potential\_candidates\text{.pop()} $
    \State $best\_loc=candidate$
\EndWhile

\State $candidate  \gets \text{convert\_row\_col\_to\_coord}best\_loc, RESOLUTION, map\text{)} $

\State \textbf{return} $candidate$

\EndProcedure
\end{algorithmic}
\end{algorithm}

" %}

* Inputs:
    * map: The current occupancy grid
    * window_size: Width of the sliding window used to generate candidate points
    * stride_length: Row much to shift the sliding window with each iteration
    * visited_locations: Grid with same size as map representing the locations we have been to
    * robot_loc: Currently location of the robot
    * avoidance_radius: Radius around candidate waypoint that should not contain walls
    * empty_radius: Radius around candidate waypoint that should be empty
    * RESOLUTION: How many meters per cell
* Outputs:
    * candidate: The best potential waypoint to go to next

#### Analysis of your algorithm’s exploration performance

The algorithm has managed full coverage in all provided maps. This algorithm is far from perfect, periodically getting stuck (although it is able to correct itself), and periodically choosing waypoints outside of the map. The algorithm can struggle to come up with waypoints in a reasonable amount of time (typically 20 seconds) due to the need to run A* after a potential candidate is selected. 

The algorithm tended to get the robot stuck in one area, ensuring that every cell in the immediate area. This behavior causes the exploration process to take a long time in the maze map if it selects a point on the other side of a wall potentially causing long travel times.

##### Did it result in full coverage of the environment (provide a screenshot from rviz)?

{% include built-in/3-img.html id="1"
    url1="/assets/images/collections/cs/robots/randomdots.png" caption1="Random Dots Map" 
    url2="/assets/images/collections/cs/robots/TheOffice.png" caption2="The Office Map" 
    url3="/assets/images/collections/cs/robots/maze.png" caption3="The Maze Map" 
%}

This algorithm resulted in full exploration of the robot's environment with a reasonable success rate. The many dots map was the first map that the robot completed, it completed the map in around 20 minutes. Euclidean distance in this map is an accurate way to approximate path distance since the map isn't divided into rooms, making it an ideal scenario for this algorithm. The office map saw completion times of around 22 minutes. This was largely due to the euclidean distance heuristic that had the robot fully explore each room before moving on. This algorithm struggled with the maze file since it had a habit of setting waypoint on the other side of a wall making it drive back and forth around the entire map, making little but steady progress.

##### Provide suggestions on how your waypoint allocation algorithm could be improved.

The algorithm should use an A* search in order to find the nearest waypoints instead of using euclidean distance. This should make the exploration time faster since it would travel through fully explored areas less often in order to reach new locations. Computationally expensive functions (such as A*) could be rewritten in C++ in order to cut down on computational cost. The robot's policy for getting unstuck could also be improved. Currently we assume that the robot gets stuck, it is facing a wall and can therefor get unstuck by backing up enough. However, it is not always the case that the wall is in front of the robot, and backing up could end up moving the robot into a wall. Instead, a better policy would be to turn and move away from the closest wall whenever the robot is stuck. 

### Setup
* Download the file ([source code](https://github.com/sudomaze/exploring-robot))
* Unzip the file into the \catkin_ws\src directory
* In \catkin_ws, run this command to build

```bash
catkin_make
```

### Run
* Open a new terminal
* In \catkin_ws, run this command to source the bash file

```bash
source devel/setup.bash
```

* Run this command to launch the ros package

```bash
roslaunch src/rob456_project/launch/rob456_project.launch
```
* Open a new terminal
* In \catkin_ws, run this command to source the bash file

```bash
source devel/setup.bash
```

* Run this command to launch the ros package

```bash
roslaunch src/nav_bundle/launch/nav_bundle.launch
```

* When the world starts, in rviz, select '2D Nav Goal' and point to a closer cell that has been explored

### Contributors

* Lucas Frey [lcsfrey](https://github.com/lcsfrey)
* Mazen Alotaibi [sudomaze](https://github.com/sudomaze)
* Daniel Boreham