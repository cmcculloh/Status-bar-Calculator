var hex;

function MakeArray()
{
    this.length = 36;
    return this;
}

function Populate()
{
    hex = new MakeArray();
    hex[1] = "0";    
    hex[2] = "1";    
    hex[3] = "2";    
    hex[4] = "3";    
    hex[5] = "4";    
    hex[6] = "5";    
    hex[7] = "6";    
    hex[8] = "7";    
    hex[9] = "8";    
    hex[10] = "9";    
    hex[11] = "A";    
    hex[12] = "B";    
    hex[13] = "C";    
    hex[14] = "D";    
    hex[15] = "E";    
    hex[16] = "F";    
  
}

// function DecimaltoAnother(N, radix)
// 
// return representation of a number N
// in the system based on radix 
//
function DecimaltoAnother(N, radix)
{
    s = "";

    A = N;
    while (A >= radix)
    {
        B = A % radix;
        A = Math.floor(A / radix);
        s += hex[B+1];
    }
    
    s += hex[A+1];
    return Transpose(s);
}

// function Transpose(s)
//
// return a string written from right to left
//
function Transpose(s)
{
    N = s.length;

    t = "";

    for (i = 0; i < N; i++)
        t = t + s.substring(N-i-1, N-i);

    s = t;
    return s;
}

function EvalB(form)
{

    answer = parseInt(number1, 2);//bin
    answer = parseInt(number1, 8);//oct
    answer = parseInt(number1, 10);//dec
    answer = parseInt(number1, 16);//hex
    
    answer = DecimaltoAnother(answer, 2);//bin
    answer = DecimaltoAnother(answer, 8);//oct
    answer = answer;//dec
    answer = DecimaltoAnother(answer, 16);//hex
    
}

function EvalT(form)
{
    if (form.t.value.length != 0)
        M = parseInt(form.t.value, 3);
    else
        M = 0;
    form.b.value = DecimaltoAnother(M, 2);
    form.q.value = DecimaltoAnother(M, 5);
    form.o.value = DecimaltoAnother(M, 8);
    form.h.value = DecimaltoAnother(M, 16);
    form.r.value = DecimaltoAnother(M, 36);
    form.d.value = M;
}

function EvalQ(form)
{
    if (form.q.value.length != 0)
        M = parseInt(form.q.value, 5);
    else
        M = 0;
    form.b.value = DecimaltoAnother(M, 2);
    form.t.value = DecimaltoAnother(M, 3);
    form.o.value = DecimaltoAnother(M, 8);
    form.h.value = DecimaltoAnother(M, 16);
    form.r.value = DecimaltoAnother(M, 36);
    form.d.value = M;
}

function EvalO(form)
{
    if (form.o.value.length != 0)
        answer = parseInt(number1, 8);
    else
        M = 0;
    form.b.value = DecimaltoAnother(M, 2);
    form.t.value = DecimaltoAnother(M, 3);
    form.q.value = DecimaltoAnother(M, 5);
    form.h.value = DecimaltoAnother(M, 16);
    form.r.value = DecimaltoAnother(M, 36);
    form.d.value = M;
}

function EvalD(form)
{
    if (form.d.value.length != 0)
        M = parseInt(form.d.value, 10);
    else
        M = 0;
    form.b.value = DecimaltoAnother(M, 2);
    form.t.value = DecimaltoAnother(M, 3);
    form.q.value = DecimaltoAnother(M, 5);
    form.o.value = DecimaltoAnother(M, 8);
    form.h.value = DecimaltoAnother(M, 16);
    form.r.value = DecimaltoAnother(M, 36);
}

function EvalH(form)
{
    if (form.h.value.length != 0)
        M = parseInt(form.h.value, 16);
    else
        M = 0;
    form.b.value = DecimaltoAnother(M, 2);
    form.t.value = DecimaltoAnother(M, 3);
    form.q.value = DecimaltoAnother(M, 5);
    form.o.value = DecimaltoAnother(M, 8);
    form.r.value = DecimaltoAnother(M, 36);
    form.d.value = M;
}

function EvalR(form)
{
    if (form.r.value.length != 0)
        M = parseInt(form.r.value, 36);
    else
        M = 0;
    form.b.value = DecimaltoAnother(M, 2);
    form.t.value = DecimaltoAnother(M, 3);
    form.q.value = DecimaltoAnother(M, 5);
    form.o.value = DecimaltoAnother(M, 8);
    form.h.value = DecimaltoAnother(M, 16);
    form.d.value = M;
}