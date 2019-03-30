const math={}

function suma(n1,n2){
    return n1+n2
}

function resta(n1,n2){
    return n1-n2
}

function mult(n1,n2){
    return n1*n2
}

function div(n1,n2){
    return n1/n2
}

math.suma=suma
math.resta=resta
math.mult=mult
math.div=div

module.exports = math