function isLeapYear(year)
{   
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))
    {
        return true;
    }
    else 
    {
        return false;
    }

}


const checkLeapYear = isLeapYear(1700);
console.log(checkLeapYear);