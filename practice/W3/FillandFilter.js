const firstFill = [2,3,4,5,6,7,8,9];

console.log(firstFill.fill("Nikhitha",2,4));

const FirstFilter = [12,34,56,78,90,98,100,110]

const access = FirstFilter.filter((val)=>{
    return val < 100;
})
console.log(access);


var mobile = {
    type :"iphone",
    model:"16pro",
    colour:"Grey",
    camera : "yes",
    latestmodel:"true"
}
console.table(mobile);


var user = {
    FirstName : "Hitesh",
    LastName : "Choudhary",
    Role: "Admin",
    LoginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse :function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.FirstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info: function(){
        return `${this.FirstName} ${this.LastName} is in the role of ${this.Role} and counted of ${this.LoginCount} and is he signed from the fcebook account${this.facebookSignedIn} and enrolled in the ${this.courseList.length} courses`;
    }
};


user.buyCourse("React JS course");
user.buyCourse("Angular course");
console.log(user.getCourseCount());
console.log(user.courseList);
console.log(user.info());
