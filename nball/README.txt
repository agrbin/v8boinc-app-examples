this example does estimation of n dimensional ball volume by monte carlo
method.

in each iteration, a random vector is picked and tested whether its distance to
origin is smaller than unity or not.

input file is an array with two elements: dimension of a ball, and number of
iterations to do.

main returns array with two elements, number of random vectors inside ball and
total number of iterations.

workload in input files is intentionally left small (you will se a warning when
    runing `v8boinc estimate`) for debugging purposes.
