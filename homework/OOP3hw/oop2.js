class Rectangle{
    width;
    height;
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    calculateArea(){
       return this.width * this.height;
    }
    calculatePerimeter(){
        return 2 * (this.width +this.height);
    }
}

const myRectangle = new Rectangle(5,10);
console.log("Recatangle Area",myRectangle.calculateArea());
console.log("Rectangle perimeter",myRectangle.calculatePerimeter());