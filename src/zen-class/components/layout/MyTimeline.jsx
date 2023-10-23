// // // import * as React from "react";
// // // import Timeline from "@mui/lab/Timeline";
// // // import TimelineItem from "@mui/lab/TimelineItem";
// // // import TimelineSeparator from "@mui/lab/TimelineSeparator";
// // // import TimelineConnector from "@mui/lab/TimelineConnector";
// // // import TimelineContent from "@mui/lab/TimelineContent";
// // // import TimelineDot from "@mui/lab/TimelineDot";

// // // export default function TimeLine() {
// // //   return (
// // //     <Timeline>
// // //       <TimelineItem>
// // //         <TimelineSeparator>
// // //           <TimelineDot />
// // //           <TimelineConnector />
// // //         </TimelineSeparator>
// // //         <TimelineContent>Eat</TimelineContent>
// // //       </TimelineItem>
// // //       <TimelineItem>
// // //         <TimelineSeparator>
// // //           <TimelineDot />
// // //           <TimelineConnector />
// // //         </TimelineSeparator>
// // //         <TimelineContent>Code</TimelineContent>
// // //       </TimelineItem>
// // //       <TimelineItem>
// // //         <TimelineSeparator>
// // //           <TimelineDot />
// // //         </TimelineSeparator>
// // //         <TimelineContent>Sleep</TimelineContent>
// // //       </TimelineItem>
// // //     </Timeline>
// // //   );
// // // }
// // // src/components/Timeline.js
// // import React from "react";

// // import { Work, School, Timeline } from "@mui/icons-material";
// // import { Paper, Typography } from "@mui/material";

// // const MyTimeline = () => {
// //   return (
// //     <div>
// //       <Typography variant="h4" gutterBottom>
// //         My Timeline
// //       </Typography>
// //       <Timeline align="alternate">
// //         {/* <TimelineItem>
// //           <TimelineSeparator>
// //             <TimelineDot color="primary">
// //               <Work />
// //             </TimelineDot>
// //             <TimelineConnector />
// //           </TimelineSeparator>
// //           <TimelineContent> */}
// //         <Paper elevation={3} className="timeline-paper">
// //           <Typography variant="h6" component="h1">
// //             Job Title
// //           </Typography>
// //           <Typography>Company Name</Typography>
// //           <Typography>Year - Year</Typography>
// //         </Paper>
// //         {/* </TimelineContent>
// //         </TimelineItem> */}
// //         {/* <TimelineItem>
// //           <TimelineSeparator>
// //             <TimelineDot color="secondary">
// //               <School />
// //             </TimelineDot>
// //             <TimelineConnector />
// //           </TimelineSeparator>
// //           <TimelineContent>
// //             <Paper elevation={3} className="timeline-paper">
// //               <Typography variant="h6" component="h1">
// //                 Degree
// //               </Typography>
// //               <Typography>School Name</Typography>
// //               <Typography>Year - Year</Typography>
// //             </Paper>
// //           </TimelineContent>
// //         </TimelineItem> */}
// //         {/* Add more TimelineItems as needed */}
// //       </Timeline>
// //     </div>
// //   );
// // };

// // export default MyTimeline;

// // src/components/StepperForm.js
// // import React, { useState } from "react";
// // import { Stepper, Step, StepLabel, Paper, Typography } from "@mui/material";

// // const totalSteps = 40;

// // const MyTimeline = () => {
// //   const [activeStep, setActiveStep] = useState(0);

// //   const handleNext = () => {
// //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
// //   };

// //   const handleBack = () => {
// //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
// //   };

// //   return (
// //     <div>
// //       <Typography variant="h4" gutterBottom>
// //         Stepper Form
// //       </Typography>
// //       <Stepper activeStep={activeStep} alternativeLabel>
// //         {[...Array(totalSteps)].map((_, index) => (
// //           <Step key={index}>
// //             <StepLabel>Step {index + 1}</StepLabel>
// //           </Step>
// //         ))}
// //       </Stepper>
// //       <Paper elevation={3} style={{ padding: "20px" }}>
// //         <Typography variant="h6" gutterBottom>
// //           Step {activeStep + 1} Content
// //         </Typography>
// //         {/* Add your form content for the current step here */}
// //         <div>
// //           <button onClick={handleBack} disabled={activeStep === 0}>
// //             Back
// //           </button>
// //           <button onClick={handleNext} disabled={activeStep === totalSteps - 1}>
// //             Next
// //           </button>
// //         </div>
// //       </Paper>
// //     </div>
// //   );
// // };

// // export default MyTimeline;

// // src/components/StepperForm.js
// import React, { useState } from "react";
// import {
//   Stepper,
//   Step,
//   StepLabel,
//   StepConnector,
//   Paper,
//   Grid,
//   Typography,
//   makeStyles,
//   withStyles,
// } from "@mui/material";
// import styled from "@emotion/styled";

// const steps = Array.from({ length: 40 }, (_, index) => `Step ${index + 1}`);

// const connectorStyles = styled({
//   active: {
//     "& $line": {
//       borderColor: "#1976D2",
//     },
//   },
//   completed: {
//     "& $line": {
//       borderColor: "#1976D2",
//     },
//   },
//   line: {
//     borderColor: "#eaeaf0",
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// });

// const ColorlibConnector = withStyles(connectorStyles)(StepConnector);

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//   },
//   stepper: {
//     padding: theme.spacing(3, 0, 5),
//   },
//   card: {
//     borderRadius: 16,
//     padding: theme.spacing(2),
//     backgroundColor: "#f5f5f5",
//   },
// }));

// const MyTimeline = () => {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   return (
//     <div className={classes.root}>
//       <Stepper
//         activeStep={activeStep}
//         alternativeLabel
//         connector={<ColorlibConnector />}
//       >
//         {steps.map((label, index) => (
//           <Step key={index}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       <div className={classes.stepper}>
//         <Paper elevation={3} className={classes.card}>
//           <Grid container spacing={3}>
//             {Array.from({ length: 40 }).map((_, index) => (
//               <Grid item xs={6} sm={4} md={3} key={index}>
//                 <div className="step-card">
//                   <Typography variant="h6">Step {index + 1}</Typography>
//                   {/* Add form fields or content for each step */}
//                 </div>
//               </Grid>
//             ))}
//           </Grid>
//         </Paper>
//       </div>
//     </div>
//   );
// };

// export default MyTimeline;

import React from "react";

const MyTimeline = () => {
  return <div>MyTimeline</div>;
};

export default MyTimeline;
