// Function to check if time slot is inside an interval of time
function mergeInterval(interval1,interval2)
{
    let newInterval = [];
    // Check the overlap of intervals
    if (interval1[0] >= interval2[0] && interval1[1] <= interval2[1])
    {
    return newInterval = [interval2[0],interval2[1]];
    }

    if(interval2[0] >= interval1[0] && interval2[1] <= interval1[1])
    {
    return newInterval = [interval1[0],interval1[1]];
    }

    //---------------------------------------------------------------------------
    if (interval1[0] < interval2[0] && interval1[1] >= interval2[0] && interval1[1] < interval2[1])
    {
    return newInterval = [interval1[0],interval2[1]];
    }

    if (interval2[0] < interval1[0] && interval1[0] <= interval2[1]  && interval2[1] < interval1[1])
    {
    return newInterval = [interval2[0],interval1[1]];
    }

    return false;
}
