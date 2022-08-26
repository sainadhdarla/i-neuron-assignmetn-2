function primefac(x,y)
{
    while(x<=y)
    {
    if (x===1)
  {
   x++;
  }
  else if(x === 2)
  {
    console.log(2)
    x++;
  }
  else
  {
    for(let i = 2; i < x; i++)  
    {
     if(x % i === 0)
    {
     x++;
    }
}

if(x<=y)
{
    let num=x;
    let factorial=1;
    for(num;num >= 1; num--)
    {  factorial=factorial*num  }
    console.log(factorial)
    x++;
}
  } 
   }
}
primefac(3,23)