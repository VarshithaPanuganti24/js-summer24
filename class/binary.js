//binary to decimal
// 1101->
// 14 -> 1*10^1 + 4*10^0 - > 1* 10 + 4*1 -> 10 + 4 =14 => 1110
//115 -> 1*10^2 + 1* 10^1 + 5*10^0 -> 100 + 10 + 5 = 1110011

//1101(binary)(4 bit) -> 1*2^3 + 1+2^2 + 0*2^1 + 1+2^0  -> 1*8 + 1*4 +0 +1 =13(decimal)
//0111 -> 0*2^3 + 1*2^2 + 1*2^1 + 1*2^0 -> 0+ 4 + 2 +1 ->7

//10^2/10

//8 bits -> 1 byte
//for a 4 bit number ,max number in decimal
//1111 -> 15 (max),range: 0-15 (16 numbers)  2^4 -1( 16-1) (2^n -1) 
//8bits -> 2^n-1 _>(2^8 -1) ->256 -1 -> 255(max value) range (0-255)-> 256 numbers
// unnsigned number formula : 0 to (2^n) -1 

//0000 ->0
// 0001 _> 1

//two's compliment number 
// -1: 0001 -> 1110+0001 ->1111
// -2 : 0010-> 1101+0001 ->1110
//-15 : 1111 -> 0000+0001 ->0001 (1) // for 4 bit the first bit is sign remainninng 3 are value
//-7 : 0111 -> 1000 +0001 -> 1001
//-8 : 1000 -> 0111+0001 -> 1000
//2's compliment system range for n-bit number : [-2^(n-1),2^(n-1)-1]
//signed 4-bit : [-8, 7]
//signed 8-bit : [-127,128] (256 numbers) unsigned 8-bit [0,255] (also 256 numbers)

    