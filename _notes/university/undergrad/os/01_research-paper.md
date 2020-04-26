## Research Paper

### Introduction

This paper presents a comparison between Linux, FreeBSD, and Windows in three areas: concurrency, I/O, and memory management. In addition, in each area, I will discussing about the differences and similarities between them. 

### Concurrency Comparison

In this section, I will be discussing about processes, threads, CPU scheduling, and other related information that I have found interesting for each operating system based on my research.

#### Linux

Each process provides the resources needed to execute a program. A process has a virtual address space, executable code, open handles to system objects, a security context, a unique process identifier, environment variables, a priority class, minimum and maximum working set sizes, and at least one thread of execution. Each process is started with a single thread, often called the primary thread, but can create additional threads from any of its threads [[1]](#ref-1).

To create a process in Linux, we will need to use \textit{Fork() system call}, which creates a new process, called the child process, from the exiting process, called the parent process. The child process has its own process ID (PID). \textit{Fork()} takes no argument and return process ID. \textit{Fork()} returns negative value if the process isn't created, zero if the child process is created, and positive value and a child process ID if \textit{Fork()} returns from parent process. In addition, system call \textit{Fork()} duplicate the same address space of the parent process and allocate to the child process. However, the child process doesn't inherit timer and semaphore adjustment from the parent process [[2]](#ref-2).

The following code sample demonstrates how to create a process in Linux [[3]](#ref-3):

{% highlight c linenos %}
#include <unistd.h>
#include <sys/types.h>
#include <errno.h>
#include <stdio.h>
#include <sys/wait.h>
#include <stdlib.h>

int main( )
{
    pid_t child_pid;   
    child_pid = fork ( );                                    // Create a new child process;
    if (child_pid >= 0)                         
    {
        if (child_pid == 0)             
        {
            printf ("child process successfully created!!\n");
            printf ("child PID =  %d, parent PID = %d\n", getpid( ), getppid( ) );
            exit(0);
         }
    }
    else
    {
        perror("fork");
        exit(0);
    }
}
{% endhighlight %}

Threads of execution, often shortened to threads, are the objects of activity within the process. Each thread includes a unique program counter, process stack, and set of processor registers. The kernel schedules individual threads, not processes. In traditional Unix systems, each process consists of one thread. In modern systems, however, multi-threaded programs consist of more than one thread are common [[1]](#ref-1).

#### FreeBSD

A process is a program in execution. Each process has an address space containing a mapping of its program’s object code and global variables, a set of kernel resources that it can name and on which it can operate using system calls, and at least one and possibly many threads that execute its code. Every process in the system is assigned a unique identifier termed the process identifier (PID). An PID is a common mechanism used by applications and by the kernel to reference processes and it is used by applications when the latter send a signal to a process and when receiving the exit status from a deceased process. There are two PIDs that are special important to to each process:  the PID of the process itself and the PID of the process’s parent process. A process structure contains information that must always remain resident in main memory, along with references to other structures that remain resident [[4]](#ref-4).

Every thread represents a virtual processor with a full context worth of register state and its own stack mapped into the address space. In addition, every thread running in the process has a corresponding kernel thread, with its own kernel stack that represents the user thread when it is executing in the kernel as a result of a system call, page fault, or signal delivery. The threads of a process operate in either user mode or kernel mode. In user mode, a thread executes application code with the machine in a non-privileged protection mode. Thread structure tracks information that needs to be resident only when the process is executing such as its kernel run-time stack. Both, process and thread, structures are allocated dynamically as part of process creation and are freed when the process is destroyed as it exits [[4]](#ref-4).

The FreeBSD timeshare scheduler uses a priority-based scheduling policy that is biased to favor interactive programs, such as text editors, over long-running batch-type jobs. Interactive programs tend to exhibit short bursts of computation followed by periods of inactivity or I/O. The scheduling policy initially assigns a high execution priority to each thread and allows that thread to execute for a fixed time slice [[4]](#ref-4).

#### Windows

A process is basically a program in execution. The execution of a process must progress in a sequential fashion. Each process is uniquely identified by a number called a \textit{process ID} (PID). Similar to files, each process has one owner and group, and the owner and group permissions are used to determine which files and devices the process can open [[5]](#ref-5).

In addition, to create a process in Windows, we will need to use CreateProcess function. CreateProcess function runs independently of the creating process, and the following code sample demonstrates how to create a process [[5]](#ref-5):

{% highlight c++ linenos %}
#include <windows.h>
#include <stdio.h>
#include <tchar.h>

void _tmain( int argc, TCHAR *argv[] )
{
    STARTUPINFO si;
    PROCESS_INFORMATION pi;
    ZeroMemory( &si, sizeof(si) );
    si.cb = sizeof(si);
    ZeroMemory( &pi, sizeof(pi) );
    if( argc != 2 )
    {
        printf("Usage: %s [cmdline]\n", argv[0]);
        return;
    }
    // Start the child process. 
    if( !CreateProcess( NULL,   // No module name (use command line)
        argv[1],        // Command line
        NULL,           // Process handle not inheritable
        NULL,           // Thread handle not inheritable
        FALSE,          // Set handle inheritance to FALSE
        0,              // No creation flags
        NULL,           // Use parent's environment block
        NULL,           // Use parent's starting directory 
        &si,            // Pointer to STARTUPINFO structure
        &pi )           // Pointer to PROCESS_INFORMATION structure
    ) 
    {
        printf( "CreateProcess failed (%d).\n", GetLastError() );
        return;
    }
    // Wait until child process exits.
    WaitForSingleObject( pi.hProcess, INFINITE );
    // Close process and thread handles. 
    CloseHandle( pi.hProcess );
    CloseHandle( pi.hThread );
}
{% endhighlight %}

Windows implements a priority-driven, preemptive scheduling system, at least one of the highest priority ready threads always runs, with the caution that certain high-priority threads ready to run might be limited by the processors on which they might be allowed or preferred to run on, a phenomenon called processor affinity [[6]](#ref-6).

#### General Discussion

From my research, they all have similar processes features and behaviors, and Windows' threads are similar to FreeBSD in the current model and the interface definition for Windows' threads are similar to Linux. In addition, FreeBSD and Windows have a similar CPU scheduling as they both use priority-queues. [[1]](#ref-1)[[2]](#ref-2)[[4]](#ref-4)[[5]](#ref-5)[[6]](#ref-6).

### IO Comparison

In this section, I will be discussing about I/O (block and character), data structures, algorithms, cryptography, I/O scheduling, types of devices, and other related information that I have found interesting for each operating system based on my research.

#### FreeBSD

The basic model of the UNIX I/O system is a sequence of bytes that can be accessed either randomly or sequentially, and there aren't any access methods and control blocks in typical UNIX user process. Different programs expect various levels of structure, but the kernel doesn't impose structure on I/O. In addition, UNIX processes use a descriptor to reference I/O streams. Descriptors are small unsigned integers obtained from the open and socket system calls. Read and write system calls can be applied to descriptors to transfer data, and close system call can be used to dead-locate any descriptor. There are three types of descriptors, files, pipes, and sockets. Files are linear array bytes, has at least one name, exists until all its names are deleted explicitly, and no process holds a descriptor for it. Pipes are a linear array of bytes, no name, used as an I/O stream, it is unidirectional, and created by a pipe system call. Sockets are transient objects, used for interprocess communication, exists only as long as some process holds a descriptor referring to it, and created by a socket system call. Furthermore, hardware devices can be categorized as either block (structure) or character (unstructured). For block devices, they are typified by disks and magnetic tapes, the kernel supports read-modify-write-type buffering actions on block-oriented structured devices to allow latter to be read and written in a totally random byte addressed fashion, and the filesystems are created on block devices. For character devices, they are communication lines, raster plotters, and unbuffered magnetic tapes and disks, and are support large block I/O transfers [[7]](#ref-7).

For previous editions of stream I/O system, the stream I/O system was based on the UNIX character I/O system, which allows a user process to open a way terminal port and then to insert appropriated kernel-processing modules and the modules that are being processed by the network protocols can be inserted in the appreciated kernel-processing modules. In addition, stacking a terminal-processing module on top of a network-processing module allowed flexible and efficient implementation of the network viral terminals within the kernel. In newer editions of stream I/O system ,such as 18th edition which was adopted in System V. However, the design of the networking facilities for 4.2BSD changed its approach based on the socket interface and flexible multi-player network architecture, which allows a single system to support multiple sets of networking protocols with stream, datagram, and other types of access. In addition, the user application and the kernel operate independently of each other for security. In 4.4BSD, the kernel doesn't store I/O control blocks or other operating-system-related data structures in the application address space. Each user-level application is provided with an independent address space in which it executes its applications/processes. Moreover, the kernel makes most of the state changes invisible to the processes involved [[7]](#ref-7).

FreeBSD supports two different disk encryption methods, GBDE and GELI, and both of the methods support different cryptographic algorithms that counter different threats. For GBDE, it is high-security (protecting the user as protecting the data), cryptographic key provided by the user, and when the key is lost, the data can't be accessed. On the other hand, GELI protects the data but doesn't protect the user, it uses FreeBSD's cryptographic device driver, and takes advantage of its transparently [[8]](#ref-8).

#### Windows

The design goals for the Windows I/O system are to provide an abstraction of devices, both hardware and software to application with a selected features of the operating system, such as uniform security, high-performance asynchronous, high-level language support, etc. Windows I/O system is responsible for the connection between user model functionality, storage, and drivers with WDM WMI Routines, PnP Manager, Power Manager, and I/O Manager. For I/O Manager, it is the core of the Windows I/O system because it defines the order of the framework within which I/O requests are delivered to device drivers. Most I/O requests are represented as I/O Request Packet (IRP), which travels from one I/O system component to another. The design of Windows I/O system allows an individual application thread to manage multiple I/O requests concurrently [[9]](#ref-9).

Moreover, I have found 4 interesting algorithms built within the driver structure, Initialization Routine, Opening Devices, IRP, and Completing an I/O Request. For the Initialization Routine, the I/O manager executes a driver's Initialization Routine when it loads the driver into the operating system. Then, the Initialization Routine fills in the system data structures to register the rest of the driver's routines with the I/O manager and performs any global driver initialization that is necessary. For the Opening Devices, a file object is in a kernel model data structure that represents a handle to a device, and this process allows synchronization and easy manipulation of the object files. For IRP, the IRP is where the I/O system stores information it needs to process an I/O request, so when a thread calls an I/O API, the I/O manager constructs an IRP to represent the operation as it progresses through the I/O system. For Completing an I/O Request, it starts when a driver calls IoCompleteRequest to inform the I/O manager that has completed process teh request specified in the IRP [[9]](#ref-9).

I have found a good example[[10]](#ref-10) of how to use IoCompleteRequest in a Windows machine to implement Completing an I/O Request.

{% highlight bash linenos %}
NTSTATUS CompleteRequest(PIRP Irp, NTSTATUS status, ULONG_PTR Information)
{
    Irp->IoStatus.Status = status;
    Irp->IoStatus.Information = Information;
    IoCompleteRequest(Irp, IO_NO_INCREMENT);
    return status;
}
{% endhighlight %}

#### General Discussion

A comparison between FreeBSD, Linux, and Windows 2000, that FreeBSD and Linux have higher security compared to Windows 2000 because they are both open source and Windows 2000 is closed, which means the main developers need to detect errors in the system by themselve. However, FreeBSD has higher security than Linux beucase FreeBSD requires third parties verification of the system compared to Linux, which can accepts updates from anyone with minor verification. In addition, Windows 2000 is supported by most of device manufactures because its layered architecture and generic use of objects [[11]](#ref-11)[[12]](#ref-12).

To sum up, it seems that FreeBSD has a Linux-like I/O system strcture compared to Windows which treats every file as an object. In addition, FreeBSD has higher security than Linux and Windows because FreeBSD has different methods to protect data. However, Windows is supported by most of device manufactures because its layered architecture and generic use of objects [[7]](#ref-7)[[8]](#ref-8)[[9]](#ref-9)[[11]](#ref-11)[[12]](#ref-12).

### Memory Management Comparison

In this section, I will be discussing about memory management in FreeBSD and Windows based on my research.

#### FreeBSD

Berkeley Software Distribution (BSD) kernel handles process scheduling, memory management, symmetric multi-processing, device drivers, etc. In addition, for memory management in general, each process has its own private address and each address space is divided into 3 logical segments: text, data, and stack. For the text segment, it is read-only, has initialized and uninitialized data portions of a program, and, in most machines, a process can change the size of its text segment only when the segment's contents are overlaid with data from the files system or when debugging in action. For the stack, it has application's run-time stack and makes a system call in most machines. Lastly, initial contents of the segments of a child process are duplicated from the segments of a parent process. Moreover, for memory management inside the kernel, kernel often does allocation of memory that are needed for only the duration of a single system call, but in a user process, such as short-term memory, would be allocated on the run-time stack. Kernel's memory isn't feasible to allocate even moderate-sized blocks of memory on it because the kernel has a limited run-time stack [[7]](#ref-7).

For memory management, kernel can't easily deal with memory allocation errors and often can't scheme. Therefore, getting the memory in the kernel is more complicated than in user-space. Moreover, kernel treats phsical pages as the basic unit of memory management and kernel represents every phsical page on the system with a struct page structure, which is defined in <linux/mm\_types.h> [[1]](#ref-1).

{% highlight c linenos %}
struct page {
    unsigned long flags;
    atomic_t _count;
    atomic_t _mapcount;
    unsigned long private;
    struct address_space *mapping;
    pgoff_t index;
    struct list_head lru;
    void *virtual;
};
{% endhighlight %}

The kernel can't treat all pages as the same because the hardware limitation. Therefore, some pages can't be used for certain because of their physical address in memory. Hence, kernel uses the zones to group pages of similar properties. Linux partitions the system's pages into zones to have a pooling in place to satisfy allocations as needed. Although some allocations may require pages from a partiular zone, other allocations my pull from multiple zones. Each zone is represented by a struct zone, which is defined in <linux/mmzone.h> [[1]](#ref-1).

{% highlight c linenos %}
struct zone {
    unsigned long watermark[NR_WMARK];
    unsigned long lowmem_reserve[MAX_NR_ZONES];
    struct per_cpu_pageset pageset[NR_CPUS];
    spinlock_t lock;
    struct free_area free_area[MAX_ORDER]
    spinlock_t lru_lock;
    struct zone_lru {
        struct list_head list;
        unsigned long nr_saved_scan;
    } lru[NR_LRU_LISTS];
    struct zone_reclaim_stat reclaim_stat;
    unsigned long pages_scanned;
    unsigned long flags;
    atomic_long_t vm_stat[NR_VM_ZONE_STAT_ITEMS];
    int prev_priority;
    unsigned int inactive_ratio;
    wait_queue_head_t *wait_table;
    unsigned long wait_table_hash_nr_entries;
    unsigned long wait_table_bits;
    struct pglist_data *zone_pgdat;
    unsigned long zone_start_pfn;
    unsigned long spanned_pages;
    unsigned long present_pages;
    const char *name;
};
{% endhighlight %}

Kmalloc() is similar to malloc() in user-space, but it is just a simple interface for obtaining kernel memory in byte-sized chunks and it can be used to allocate pages. For freeing pages, we can use kfree(), which is definded in <linux/slab.h>, kfree() frees a block of memory previously allocated with kmalloc() [[1]](#ref-1).

{% highlight c linenos %}
    buf = kmalloc(BUF_SIZE, GFP_ATOMIC);
    if (!buf)
    /* error allocating memory ! */
    ...
    kfree(buf);
{% endhighlight %}
Free lists data structures are the default data structures in kernel. Due to the fact that allocating and freeing data structures is one of the most common operations inside any kernel has issues, slab layer is used to solve these issues. Slab layer acts as generic data structure-chaining layer and slab layer attempts to cache frequently used data structures as they tend to be allocated and freed often, prevent memory fragmentation, which is resulted from frequent allocation and deallocation, by cached free lists are arranged contiguously, and it has many other promises that slab layer attempts to provide [[1]](#ref-1).

#### Windows

The memory manager in Windows implements virtual memory, provides a core set of services such as memory mapped files, copy-on-write memory, large memory support, and underlying support for the cache manager.The memory manager creates the two memory pools, non-paged pool and paged pool, that the system uses to allocate memory. Non-paged pool and paged pool are located in the region of the address space that is reserved for the system and mapped into the virtual address space of each process. For the non-paged pool, it consists of virtual memory addresses that are guaranteed to reside in physical memory as long as the corresponding kernel objects are allocated. For the paged pool, it consists of virtual memory that can be paged in and out of the system. To improve performance, systems with a single processor have three paged pools, and multiprocessor systems have five paged pools [[5]](#ref-5).

It seems that Windows uses VirtualAlloc() to use a page granularity, so using VirtualAlloc can result in higher memory usage and it allows you to specify additional options for memory allocation. In order to free pages, you need to use VirtualFree() [[5]](#ref-5).

{% highlight c++ linenos %}
LPVOID WINAPI VirtualAlloc(
      _In_opt_ LPVOID lpAddress,
      _In_     SIZE_T dwSize,
      _In_     DWORD  flAllocationType,
      _In_     DWORD  flProtect
);
BOOL WINAPI VirtualFree(
      _In_ LPVOID lpAddress,
      _In_ SIZE_T dwSize,
      _In_ DWORD  dwFreeType
);
{% endhighlight %}

#### General Discussion

Windows and Linux has different memory management structures. In Windows, memory management uses tree data structures, uses cluster demand paging, brings 8 pages in memory simultaneously, and page replacements uses First In First Out (FIFO) algorithm. In the other hand, in Linux, memory management uses linked lists data stricture, uses demand paging with no pre-paging and it doesn't swap the entire process instead it uses a lazy swapper, swaps the necessary pages into memory only to avoid reading pages that won't be used, which decreases swap time and amount of physical memory required, and page replacement uses Least Recently Used (LRU) algorithm [[13]](#ref-13).

From my research, it seems that Windows is built for commercial use due it's complex systems to handle large amount of data compared to linux and FreeBSD, and FreeBSD seems to follow most of Linux memory management style, but it is more stable than Linux by using different methods [[1]](#ref-1)[[5]](#ref-5)[[7]](#ref-7)[[13]](#ref-13).

### Conclusion

To conclude, I have discussed about the differences and similarity between Linux, FreeBSD, and Windows in these areas: concurrency, I/O, and memory management. Therefore, based on my research and understanding, I conclude that FreeBSD and Linux are an excellent operating systems because of their system simplicity compared to Windows. However, Windows complexity was made for a certain purpose, which is commercial use. In addition, FreeBSD seems to be more stable and secure than Linux. Other than that, all of the systems have similar general architecture and data flow, but they vary in the way they implement and process these parts.

### References
<ol>
{% include built-in/note.html id="1" details="R. Love,Linux Kernel Development, 3rd ed. Addison-Wesley Professional, 2010."%}
{% include built-in/note.html id="2" details='"Operating system-processes,"Available at https://www.tutorialspoint.com/operatingsystem/osprocesses.htm(2018/10/19).'%}
{% include built-in/note.html id="3" details='A. Vara, "How to create process in linux (part 10/15)," Available at https://www.engineersgarage.com/tutorials/introduction-linux-part-1015.'%}
{% include built-in/note.html id="4" details='M. K. McKusick, G. Neville-Neil, and R. N. Watson,The Design and Implementation of the FreeBSD Operating System, 2nd ed. Addison-Wesley Professional, 2014.'%}
{% include built-in/note.html id="5" details='"Memory management," Available at https://docs.microsoft.com/en-us/windows/desktop/memory/memory-management(2018/05/30).'%}
{% include built-in/note.html id="6" details='M. E. Russinovich, D. A. Solomon, and A. Ionescu,Windows Internals, Part 1: Covering Windows Server 2008 R2 and Windows 7,6th ed. Redmond, WA, USA: Microsoft Press, 2012.'%}
{% include built-in/note.html id="7" details='M. K. McKusick, K. Bostic, M. J. Karels, and J. S. Quarterman,The Design and Implementation of the 4.4BSD Operating System.Redwood City, CA, USA: Addison Wesley Longman Publishing Co., Inc., 1996.'%}
{% include built-in/note.html id="8" details='M. W. Lucas,Absolute Freebsd, 2Nd Edition, 2nd ed. San Francisco, CA, USA: No Starch Press, 2007.'%}
{% include built-in/note.html id="9" details='M. E. Russinovich, D. A. Solomon, and A. Ionescu,Windows Internals, Part 2: Covering Windows Server 2008 R2 and Windows 7(Windows Internals). Redmond, WA, USA: Microsoft Press, 2012.'%}
{% include built-in/note.html id="10" details='H. Haftmann, "Completing i/o requests," Available at https://www-user.tu-chemnitz.de/∼heha/oneywdm/ch05d.htm.'%}
{% include built-in/note.html id="11" details='B. Bruce and M. Stokely, "Freebsd vs. linux vs. windows 2000," Available at https://people.freebsd.org/∼murray/bsdflier.html.'%}
{% include built-in/note.html id="12" details='S. Hand, "Operating systems," Available at https://www.cl.cam.ac.uk/teaching/1011/OpSystems/os1a-slides.pdf'%}
{% include built-in/note.html id="13" details='U. Essays, "Compare the memory management of windows with linux," Available at https://www.ukessays.com/essays/engineering/compare-the-memory-management.php (2016/12/05).'%}
</ol>