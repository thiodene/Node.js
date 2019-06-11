function processData(input) {
    //Enter your code here
    let i;
    let j;
    //physical island starts with 1
    let k = 1;
    let l;
    let m;
    let n;
    let o = 0;
    let island = [];
    let new_input = [];
    let island_iter = 0;
    let island_register = [];
    let related;
    let new_island;
    let rel_island;
    let p;
    let q;
    
    island = input.split(/[\s,]+/);
   
    // Build the new matrix
    var input_i = parseInt(island[0]);
    var input_j = parseInt(island[1]);
    
    for (m=0;m<=input_i-1;m++){
        new_input.push([m]);
        for(n=0;n<=input_j-1;n++){
            new_input[m][n] = island[o+2];
            o++;
        }
    }
    
    for (i=0;i<=new_input.length - 1;i++){
        for (j=0;j<=new_input[0].length - 1;j++){
            related = false;
            // Check if position has a 1
            if (new_input[i][j] == 1){
                
                if(i == 0 && j == 0){
                    // If original position has a 1 store it
                    island_register.push(String(k)+String(i)+String(j));
                }
                else{
                    // If other positions store them too with their corresponding island number
                    new_island = k + 1;
                    
                    if (i == 0){
                        if(new_input[i][j-1] == 1){
                            // scan all registered positions that to get the island number
                            for(l=k;l>=1;l--){
                                // Look for the position and island number
                                p = j - 1;
                                if (island_register.indexOf(String(l)+String(i)+String(p)) != -1){
                                    related = true;
                                    rel_island = l;
                                }
                            }
                        }
                        /*
                        if(new_input[i+1][j-1] == 1){
                            // scan all registered positions that to get the island number
                            for(l=k;l>=1;l--){
                                p = i+1;
                                q = j-1;
                                // Look for the position and island number
                                if (island_register.indexOf(String(l)+String(p)+String(q)) != -1){
                                    related = true;
                                    rel_island = l;
                                }
                            }
                        }
                        */
                    }
                    else if (j == 0){
                        if(new_input[i-1][j] == 1){
                            // scan all registered positions that to get the island number
                            for(l=k;l>=1;l--){
                                p = i - 1;
                                // Look for the position and island number
                                if (island_register.indexOf(String(l)+String(p)+String(j)) != -1){
                                    related = true;
                                    rel_island = l;
                                }
                            }
                        }
                        
                        if(new_input[i-1][j+1] == 1){
                            // scan all registered positions that to get the island number
                            for(l=k;l>=1;l--){
                                p = i - 1;
                                q = j + 1;
                                // Look for the position and island number
                                if (island_register.indexOf(String(l)+String(p)+String(q)) != -1){
                                    related = true;
                                    rel_island = l;
                                }
                            }
                        }
                        
                    }
                    else if (i == new_input.length-1){
                        if(new_input[i][j-1] == 1){
                            // scan all registered positions that to get the island number
                            for(l=k;l>=1;l--){
                                // Look for the position and island number
                                p = j - 1;
                                if (island_register.indexOf(String(l)+String(i)+String(p)) != -1){
                                    related = true;
                                    rel_island = l;
                                }
                            }
                        }
                        if(new_input[i-1][j] == 1){
                            // scan all registered positions that to get the island number
                            for(l=k;l>=1;l--){
                                p = i - 1;
                                // Look for the position and island number
                                if (island_register.indexOf(String(l)+String(p)+String(j)) != -1){
                                    related = true;
                                    rel_island = l;
                                }
                            }
                        }
                        if(new_input[i-1][j-1] == 1){
                            // scan all registered positions that to get the island number
                            for(l=k;l>=1;l--){
                                p = i - 1;
                                q = j - 1;
                                // Look for the position and island number
                                if (island_register.indexOf(String(l)+String(p)+String(q)) != -1){
                                    related = true;
                                    rel_island = l;
                                }
                            }
                        }
                        if(new_input[i-1][j+1] == 1){
                            // scan all registered positions that to get the island number
                            for(l=k;l>=1;l--){
                                p = i - 1;
                                q = j + 1;
                                // Look for the position and island number
                                if (island_register.indexOf(String(l)+String(p)+String(q)) != -1){
                                    related = true;
                                    rel_island = l;
                                }
                            }
                        }
                    }
                    else{
                        
                    
                        if(new_input[i][j-1] == 1){
                            // scan all registered positions that to get the island number
                            for(l=k;l>=1;l--){
                                // Look for the position and island number
                                p = j - 1;
                                if (island_register.indexOf(String(l)+String(i)+String(p)) != -1){
                                    related = true;
                                    rel_island = l;
                                }
                            }
                        }
                        if(new_input[i-1][j+1] == 1){
                            // scan all registered positions that to get the island number
                            for(l=k;l>=1;l--){
                                p = i-1;
                                q = j+1;
                                // Look for the position and island number
                                if (island_register.indexOf(String(l)+String(p)+String(q)) != -1){
                                    related = true;
                                    rel_island = l;
                                }
                            }
                        }
                        if(new_input[i-1][j] == 1){
                            // scan all registered positions that to get the island number
                            for(l=k;l>=1;l--){
                                p = i - 1;
                                // Look for the position and island number
                                if (island_register.indexOf(String(l)+String(p)+String(j)) != -1){
                                    related = true;
                                    rel_island = l;
                                }
                            }
                        }
                        if(new_input[i-1][j-1] == 1){
                            // scan all registered positions that to get the island number
                            for(l=k;l>=1;l--){
                                p = i - 1;
                                q = j - 1;
                                // Look for the position and island number
                                if (island_register.indexOf(String(l)+String(p)+String(q)) != -1){
                                    related = true;
                                    rel_island = l;
                                }
                            }
                        }
                    }
                    // Finally check if ever related to anything
                    if(related){
                        //island_register.push([rel_island,i,j]); 
                        island_register.push(String(rel_island)+String(i)+String(j));
                    }
                    else{
                        //island_register.push([new_island,i,j]);
                        island_register.push(String(new_island)+String(i)+String(j));
                        k++;
                    }
                }
                
            }
        }
    }
    
    //console.log(island_register);
    console.log(k);
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
