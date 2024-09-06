# Reduce Basics

``` js
const dailyTotal = staff.reduce((total, person) => {

    total += person.salary
    return total
},0)
```
from the above code, `0` is initial value.

**NEVER FORGET** to return the first parameter (`total`)