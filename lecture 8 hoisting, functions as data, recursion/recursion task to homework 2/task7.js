function task7(n, result, startNumber){
    if(n == 0){
        return result;
    }
    return task7(--n, result+=startNumber+" ", startNumber+=3);
}
console.log(task7(5, "", 3));