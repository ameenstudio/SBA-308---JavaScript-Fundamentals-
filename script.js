
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };

  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };

  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmission){// 1 - declare function
  const result=[];
  let learners={}
    try{
        if(AssignmentGroup.course_id!==CourseInfo.id){// 
            throw new Error("Course Id does not match Assignment group course id")
        }
        for(let submission of LearnerSubmission ){
            // data from the objects
            let learner_id=submission.learner_id
            let assignment_id=submission.assignment_id
            let submissionAt=submission.submission.submitted_at
            let score=submission.submission.score
            let foundAssign;
            let dueDate;
            let submittedDate;
            let points_possible;
            let precentage;
            // console.log(score)
            for (let singleAssign of AssignmentGroup.assignments ){
                if(singleAssign.id==assignment_id){
                    foundAssign=singleAssign.id
                }
                dueDate=new Date ( singleAssign.due_at)
                submittedDate=new Date (submissionAt)
                points_possible=singleAssign.points_possible
                if (!foundAssign){
                  continue;
                }     
                if (submittedDate>dueDate){
                  score-=points_possible*0.1
                }
                 precentage =(score/points_possible)

                 if (!learners[learner_id]) { //does the learner exist in the object, if not create or add properties to the object
                  learners[learner_id] = { id: learner_id, avg: 0, totalPoints: 0,   weightedTotal: 0 };
              }
              learners[learner_id].totalPoints += points_possible;
              learners[learner_id].weightedTotal += score;
              learners[learner_id].avg = (learners[learner_id].weightedTotal / learners[learner_id].totalPoints) * 100;
              // delete learners[learner_id].totalPoints;
              
            }
            // console.log(learners,"%");
            
            
            
          }
          
          result.push(learners) 

    }catch(err){
        console.error(err)
        

    }

  return result  
}


const result= getLearnerData(CourseInfo, AssignmentGroup ,LearnerSubmissions) 
console.log("Final output",result);

 


//   let result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];

