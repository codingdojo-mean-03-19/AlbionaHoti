/*
  1. Angular converts http responses into observable
  2. Subscribe to an observable to receive data updates
  3. Components subscribe to observables


  In our component:
  ngOnInit() - method in the component - runs right after the constructor method, WE want to reserve the constructor method for our dependency injections - that's gonna help the component get setup.

  - After this, the methods inside the ngOnInit() method will run right away.

  The GOALS
  1. Have the component control when AJAX requests are made 
  2. Have the component receive the data

  
*/