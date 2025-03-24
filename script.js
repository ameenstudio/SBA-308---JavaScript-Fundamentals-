
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
            console.log(score)
            for (let singleAssign of AssignmentGroup.assignments ){
                if(singleAssign.id==assignment_id){
                    foundAssign=singleAssign.id
                }
                dueDate=new Date ( singleAssign.due_at)
                // submittedDate=           // I'm stuck here could not get pass it 

            }
            

        }

    }catch(err){
        console.error(err)
        

    }

    
}
getLearnerData(CourseInfo, AssignmentGroup ,LearnerSubmissions)



