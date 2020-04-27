## Final Project [Travelling Salesman Problem (TSP)]

This is a final report for analysis of solving the travelling salesman problem using multiple algorithms and the analysis of those algorithms.

### Algorithms that Solve TSP

#### Brute Force Search (Naive Algorithm)

##### Run-time Analysis

$$O(n!)$$

##### Pseudo-code

{% include built-in/pcode.html id="1" code="
\begin{algorithm}
\caption{Brute Force Search}
\begin{algorithmic}
\Procedure{BF}{$r$, $cititiesNotInRoute[1...n]$}
    \If {$citiesNotInRoute.length != 0$}
        \For{$i$ \textbf{from} $0$ \textbf{to} $citiesNotInRoute.length$}
            \State $cityRemoved = popFront(cititiesNotInRoute)$
            \State $newRoute = r$
            \State $push(newRoute, cityRemoved)$
            \State $BF(newRoute, cititiesNotInRoute)$
            \State $push(cititiesNotInRoute, cityRemoved)$
        \EndFor
    \EndIf
    \If {$skip == true$}
        \State $print(r)$
    \EndIf
\EndProcedure
\end{algorithmic}
\end{algorithm}
" %}

##### Description

This algorithm checks every vertices and every edges. Therefore, it is clear it will find the solution. The running time is $O(n!)$ because the starting vertex has $n-1$  edges to choose, next one has $n-2$  edges to choose, $...  n-1$  vertex has $1$ edge to choose. Therefore, by multiply every edges, Icould get the running time which is $(n-1)!$. Since it is clear $(n-1)! <  n!$, I can say the running time is $O(n!)$.I choose this algorithm because it is the basic way to think about how to solve this problem. This algorithm is easy to make, but it is really slow. Therefore, this algorithm makes us to realize how important the algorithm is. Better algorithm makes way more faster program.

#### Held-Karp Algorithm (Dynamic Algorithm)

##### Run-time Analysis

$$O(n^2 \times 2^n)$$

##### Pseudo-code

{% include built-in/pcode.html id="2" code="
\begin{algorithm}
\caption{Held-Karp Algorithm}
\begin{algorithmic}
\Procedure{HK}{$G$, $n$}
    \For{$k$ \textbf{from} $2$ \textbf{to} $n$}
        \State $C(\{k\},k)=d_{1, k}$
    \EndFor
    \For{$s$ \textbf{from} $2$ \textbf{to} $n-1$}
        \For{$all\ S \subseteq \{2,...,n\}, |S|=s$}
            \For{$all\ k \in S$}
                \State $\{C(S,k)=min_{m \neq k, m \in S}[C(S-\{k\},m)+d_{m, k}]\}$
            \EndFor
        \EndFor
    \EndFor
    \State $opt=min_{k \neq 1}[C(\{2, 3, ..., n\}, k) + d_{k, 1}]$
    \State \textbf{return} $opt$
\EndProcedure
\end{algorithmic}
\end{algorithm}
" %}

##### Description

This algorithm use dynamic algorithm to solve the problem. It first gets the distance between two vertices and save it to array. It is $O(n)$ steps. The next part is to find the minimum distance with small set of vertices. The for loop, for $s$ from $2$ to $n-1$ and for all $S$  in $\{2, ..., n\}$, $\|S\| =  s$, is defining small set of vertices. The next for loop is the part that getting the minimum distance from the set of vertices. Each set has s  elements and it has to compare with s  different minimum candidates, it has $O(s^2)$ running time. The first two loop, which define the set S, has running time with $SUM_i=2 ^{n-1} (C(n-1,i))$ because there are $C(n-1, i)$ number of combination for defining set with $i$  elements, and since it is from $2$  to $n-1$, it makes $SUM_i=2 ^{n-1} (C(n-1,i)) \times  n^2)$. Hence, it could be rewrite as $n^2 \times  SUM_i=2 ^{n-1} (C(n-1,i)) <= n^2 \times  2^{n-1} =  1⁄2  \times  n^2 \times  2^n =  O(2^n \times  n^2$). I choose this algorithm because I learned dynamic programming and this algorithm use that concepts. This algorithm saves data into $C(S, n)$ and use it to find minimum distance. By this skill, this algorithm can find real answer with way more faster than the brute force method. However, it is still slow.

#### K-Nearest Neighbor Algorithm (Approximation Algorithm)

##### Run-time Analysis

$$O(n^2)$$

##### Code

{% highlight python linenos %}
def Distance(a,b):
    return int(round(math.sqrt((math.pow(a['i'] - b['i'],2))+(math.pow(a['j'] - b['j'],2)))))

def KNN(cities, inFile):
    matrix = [[-1 for x in range(len(cities))] for y in range(len(cities))]
    minLength = sys.maxsize
    order = []
    for x in range(len(cities)):
        allCities = [z for z in cities]
        route = []
        route.append(allCities[x]['city'])
        allCities.remove(allCities[x])
        length = 0
        while len(allCities) > 0:
            current = cities[route[len(route)-1]]
            minDistance = sys.maxsize
            minCity = -1
            for y in range(len(allCities)):
                currentDistance = matrix[current['city']][allCities[y]['city']]
                if currentDistance == -1:
                    currentDistance = Distance(current, allCities[y])
                    matrix[current['city']][allCities[y]['city']] = currentDistance
                    matrix[allCities[y]['city']][current['city']] = currentDistance
                if currentDistance < minDistance:
                    minDistance = currentDistance
                    minCity = allCities[y]
            route.append(minCity['city'])
            allCities.remove(minCity)
            length += minDistance
        currentDistance = matrix[cities[route[0]]['city']][cities[route[len(route)-1]]['city']]
        if currentDistance == -1:
            currentDistance = Distance(cities[route[0]], cities[route[len(route)-1]])
            matrix[cities[route[0]]['city']][cities[route[len(route)-1]]['city']] = currentDistance
            matrix[cities[route[len(route)-1]]['city']][cities[route[0]]['city']] = currentDistance
        length += currentDistance
        if length < minLength:
            minLength = length
            order = [x for x in route]
            WriteFileKNN(inFile, order, minLength)
{% endhighlight %}

##### Description

This algorithm is greedy algorithm that finds the vertex with minimum weight and choose it. Therefore, the first vertex has to check $n-1$ edges and choose the minimum. Second one has to check n-2 edges and choose the minimum. The $n-1$ vertex choose $1$ edges. Hence, the running time is $SUM\ 1\ TO\ N-1\ = (N-1)(N-2)/2 = O(N^2)$. I choose this algorithm because I found that this is the fastest. This algorithm is greedy algorithm that choose only the nearest vertex from the start vertex, and keep finding the nearest vertex from the chosen one. Since it is just checking the nearest, there is possibility to find the wrong answer. However, I found that this algorithm finds reasonable path, which means not huge different than true answer, and the power of this algorithm is this is super fast. It is only $O(n^2)$. Therefore, this algorithm will be good choice when I need the result really quickly, and
it is ok to have small error. I used a nearest neighbor algorithm written in Java to get inspiration for my Python program,
found here: http://www.sanfoundry.com/java-program-implement-traveling-salesman-problem-using-nearest-neighbour-algorithm/. The program searches for the most optimal nearest neighbor route by using a brute-force wrapper for-loop to select each city as the starting point. The program is able to analyze each
city for the smaller list sizes, but for the larger ones it cannot process each city within 5 minutes, so that is why I have a section of code in the main section of the program to end the algorithm after 5 minutes. Each time the algorithm finds a new shorter route it is written to the output file, so this ensures that I am still able to have a valid result at the very beginning, well before the 5 minute time constraint is over.

#### Genetic Algorithm (Approximation Algorithm)

##### Run-time Analysis

$$O(T \times n_0 \times n^2)$$

where $T$ is the number of outer iteration, $n_0$ is the initial size of the population, and $n$ is the number of cities.

##### Code

{% highlight python linenos %}
class City:
    def __init__(self, id, x, y):
        self.id = id
        self.x = x
        self.y = y
    
    def distance(self, city):
        ## xDis = self.x - city.x
        ## yDis = self.y - city.y
        ## distance = np.sqrt((xDis ** 2) + (yDis ** 2))
        return int(round(math.sqrt((math.pow(self.x - city.x,2))+(math.pow(self.y - city.y,2)))))
    
    def __repr__(self):
        return "(" + str(self.x) + "," + str(self.y) + ")"

class Fitness:
    def __init__(self, route):
        self.route = route
        self.distance = 0
        self.fitness= 0.0
    
    def routeDistance(self):
        if self.distance ==0:
            pathDistance = 0
            for i in range(0, len(self.route)):
                fromCity = self.route[i]
                toCity = None
                if i + 1 < len(self.route):
                    toCity = self.route[i + 1]
                else:
                    toCity = self.route[0]
                pathDistance += fromCity.distance(toCity)
            self.distance = pathDistance
        return self.distance
    
    def routeFitness(self):
        if self.fitness == 0:
            self.fitness = 1 / float(self.routeDistance())
        return self.fitness
def createRoute(cityList):
    route = random.sample(cityList, len(cityList))
    return route
def initialPopulation(popSize, cityList):
    population = []

    for i in range(0, popSize):
        population.append(createRoute(cityList))
    return population
def rankRoutes(population):
    fitnessResults = {}
    for i in range(0,len(population)):
        fitnessResults[i] = Fitness(population[i]).routeFitness()
    return sorted(fitnessResults.items(), key = operator.itemgetter(1), reverse = True)
def selection(popRanked, eliteSize):
    selectionResults = []
    df = pd.DataFrame(np.array(popRanked), columns=["Index","Fitness"])
    df['cum_sum'] = df.Fitness.cumsum()
    df['cum_perc'] = 100*df.cum_sum/df.Fitness.sum()
    
    for i in range(0, eliteSize):
        selectionResults.append(popRanked[i][0])
    for i in range(0, len(popRanked) - eliteSize):
        pick = 100*random.random()
        for i in range(0, len(popRanked)):
            if pick <= df.iat[i,3]:
                selectionResults.append(popRanked[i][0])
                break
    return selectionResults
def matingPool(population, selectionResults):
    matingpool = []
    for i in range(0, len(selectionResults)):
        index = selectionResults[i]
        matingpool.append(population[index])
    return matingpool
def breed(parent1, parent2):
    child = []
    childP1 = []
    childP2 = []
    
    geneA = int(random.random() * len(parent1))
    geneB = int(random.random() * len(parent1))
    
    startGene = min(geneA, geneB)
    endGene = max(geneA, geneB)

    for i in range(startGene, endGene):
        childP1.append(parent1[i])
        
    childP2 = [item for item in parent2 if item not in childP1]

    child = childP1 + childP2
    return child
def breedPopulation(matingpool, eliteSize):
    children = []
    length = len(matingpool) - eliteSize
    pool = random.sample(matingpool, len(matingpool))

    for i in range(0,eliteSize):
        children.append(matingpool[i])
    
    for i in range(0, length):
        child = breed(pool[i], pool[len(matingpool)-i-1])
        children.append(child)
    return children
def mutate(individual, mutationRate):
    for swapped in range(len(individual)):
        if(random.random() < mutationRate):
            swapWith = int(random.random() * len(individual))
            
            city1 = individual[swapped]
            city2 = individual[swapWith]
            
            individual[swapped] = city2
            individual[swapWith] = city1
    return individual
def mutatePopulation(population, mutationRate):
    mutatedPop = []
    
    for ind in range(0, len(population)):
        mutatedInd = mutate(population[ind], mutationRate)
        mutatedPop.append(mutatedInd)
    return mutatedPop
def nextGeneration(currentGen, eliteSize, mutationRate):
    popRanked = rankRoutes(currentGen)
    selectionResults = selection(popRanked, eliteSize)
    matingpool = matingPool(currentGen, selectionResults)
    children = breedPopulation(matingpool, eliteSize)
    nextGeneration = mutatePopulation(children, mutationRate)
    return nextGeneration

def GA(inFile, population, popSize, eliteSize, mutationRate, generations):
    pop = initialPopulation(popSize, population)
    ## print("Initial distance: " + str(1 / rankRoutes(pop)[0][1]))
    
    for i in range(0, generations):
        pop = nextGeneration(pop, eliteSize, mutationRate)
    
    ## print("Final distance: " + str(1 / rankRoutes(pop)[0][1]))
    bestRouteIndex = rankRoutes(pop)[0][0]
    bestRoute = pop[bestRouteIndex]
    WriteFileGA(inFile, bestRoute, 1 / rankRoutes(pop)[0][1])
{% endhighlight %}

##### Description

The genetic algorithm seems to solve different kind of problems pretty well, such as error detection, so I have thought to give it a try to solve the TSP. The implementation of the algorithm is extremely hard compared to KNN, so I need to refer to some online resource to build the algorithm on Python, the resource is found: https://towardsdatascience.com/evolution-of-a-salesman-a-complete-genetic-algorithm-tutorial-for-python-6fe5d2b3ca35. The algorithm starts with a population, a set of solutions, and every population another new population is generated to give better solutions, so as the depth of the population increases the algorithm should give better solutions in theory.

### Testing

In order to test that my program was actually producing valid results we used the supplied tsp-verifier.py program on each of my output routes. Each result was found to be valid.

It seems that the K-Nearest Neighbor (KNN) algorithm give better results in matter of approximation of path took and speed compared to Genetic Algorithm (GA) in all cases when time is the limitation. However, as the complexity of the graph increases and there isn't no time limits, the Genetic Algorithm can finish faster with higher approximation to the optimal path when the threshold to stop is set, compared to the KNN which takes almost 2 times longer on average to reach the same optimal path results.

My best results when testing where Test 1, 2, 4, and 5 when using KNN, and GA failed in most cases besides Test 6 and 7, which gave the same results as KNN at the same time.


Please view the next page to look into all of the results.

{% include built-in/table.html id="1" content="
|  | Optimal path length | Predicted path length | Ratio |
|-----------|---------------------|-----------------------|-------|
| KNN       |         108159            |  130921                     |  1.21     |
| GA        |         108159            |  337541                     |  3.12     |
" 
caption="Example 1" %}

{% include built-in/table.html id="2" content="
|  | Optimal path length | Predicted path length | Ratio |
|-----------|---------------------|-----------------------|-------|
| KNN       |        2579             |    2975                   |  1.15     |
| GA        |        2579             |    27639                   | 10.71      |
" 
caption="Example 2" %}


{% include built-in/table.html id="3" content="
|  | Optimal path length | Predicted path length | Ratio |
|-----------|---------------------|-----------------------|-------|
| KNN       |       1573084              |     1936941                  |  1.23     |
| GA        |       1573084              |     1934200                  |  1.22     |
" 
caption="Example 3" %}


{% include built-in/table.html id="4" content="
|  | Predicted path length | Time took |
|--------|-----------------------|-----------|
| KNN    |        5911               |    0.014127969741821289       |
| GA     |        10488               |   14.512681007385254}        |
" 
caption="Test 1" %}

{% include built-in/table.html id="5" content="
|  | Predicted path length | Time took |
|--------|-----------------------|-----------|
| KNN    |       8011                |    0.11811113357543945       |
| GA     |       32837                |   18.30189299583435        |
" 
caption="Test 2" %}

{% include built-in/table.html id="6" content="
|  | Predicted path length | Time took |
|--------|-----------------------|-----------|
| KNN    |       14826                |   1.3867180347442627        |
| GA     |       103387                |  34.44625997543335         |
" 
caption="Test 3" %}

{% include built-in/table.html id="7" content="
|  | Predicted path length | Time took |
|--------|-----------------------|-----------|
| KNN    |       19711                |   12.897594213485718        |
| GA     |       220727                |  73.32604813575745         |
" 
caption="Test 4" %}

{% include built-in/table.html id="8" content="
|  | Predicted path length | Time took |
|--------|-----------------------|-----------|
| KNN    |        27128               |   123.83275985717773        |
| GA     |        465770               |  200.42861986160278         |
" 
caption="Test 5" %}

{% include built-in/table.html id="9" content="
|  | Predicted path length | Time took |
|--------|-----------------------|-----------|
| KNN    |       39834                |   299.0716700553894        |
| GA     |       39834                |   299.00313663482666        |
" 
caption="Test 6" %}

{% include built-in/table.html id="10" content="
|  | Predicted path length | Time took |
|--------|-----------------------|-----------|
| KNN    |        62110               |   299.6045079231262        |
| GA     |        62110               |   299.00823521614075        |
" 
caption="Test 7" %}
