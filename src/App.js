import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Import your JSON data
import data from "./db/tempDB.json";

import Header from "./components/header/Header";
import Home from "./pages/home/Home"; // Import your Home component
import SearchQuestions from "./pages/search/SearchQuestions"; // Import your SearchQuestions component
// import Settings from './pages/Settings'; // Import your Settings component
import About from "./pages/about/About"; // Import your About component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={SearchQuestions} />
          {/* <Route path="/settings" component={Settings} />  */}
          <Route path="/about" component={About} />
        </Routes>
        <Header />
        <div style={{paddingTop: '30px'}}>
          
          {data.map((item) => (
            <Accordion key={item.id} style={{fontFamily: 'Poppins, sans-serif', width: '90%', margin: '0 auto', borderRadius: '12px', marginBottom: '30px', border: 'none'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${item.id}-content`}
                id={`panel-${item.id}-header`}
                style={{fontFamily: 'Poppins, sans-serif'}}
              >
                <Typography style={{fontFamily: 'Poppins, sans-serif', color: '#0087D2'}}>{item.id}. </Typography><Typography style={{fontFamily: 'Poppins, sans-serif', color: '#0087D2'}}>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails style={{borderRadius: '12px'}}>
                <Typography style={{fontFamily: 'Poppins, sans-serif'}}>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;