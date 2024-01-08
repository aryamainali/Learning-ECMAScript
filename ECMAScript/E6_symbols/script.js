const id =Symbol();
// symbol is used to avoid naming conflicts
const courseInfo = {
    title:"Javascript",
    topics:["strings","arrays","objects"],
    id:"js-course"
};
courseInfo[id] = 41284;
console.log(courseInfo);
