# Reduce Basics

``` js
const dailyTotal = staff.reduce((total, person) => {

    total += person.salary
    return total
},0)
```
from the above code, `0` is initial value.

**DONT FORGET** to return first parameter (`total`)