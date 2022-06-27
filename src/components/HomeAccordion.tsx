import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContactsIcon from '@mui/icons-material/Contacts';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import EducationAndWork from './AccorditionEducationAndWork';
import Contact from './AccorditionContact';
import NJUICON from '../images/NJU.jpg'
import RICEICON from '../images/rice_icon.jpeg'
import SIMUICON from '../images/SIMU.jpg'
import MEITUANICON from '../images/meituan.jpeg'
const resourceEducation = [
  {
      image: RICEICON,
      texts:[
          "Department of Computer Science, Rice University, Houston,TX, USA",
          "Aug 2022-Now",
          "Master of Computer Science, Majoring in Computer Science"
      ]
  },
  {
      image: NJUICON,
      texts:[
          "Software Institute, Nanjing University, Nanjing China",
          "Sep 2017-June 2021",
          "Bachelor of Engineering, Majoring in Software Engineering"
      ]
  }
]
const resourceWork = [
  {
      image: MEITUANICON,
      texts:[
          "Meituan, (www.meituan.com), Beijing, China",
          "July 2021-July 2022",
          "Front-End Engineer"
      ]
  },
  {
      image: MEITUANICON,
      texts:[
          "Meituan, (www.meituan.com), Beijing, China",
          "June 2020-Oct 2020",
          "intern(Front-End)"
      ]
  },
  {
      image: SIMUICON,
      texts:[
          "SIMU, Nanjing, China",
          "April 2020-May 2020",
          "intern(Back-End)"
      ]
  }
]
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <SchoolIcon />
          <Typography sx={{ width: '33%', flexShrink: 0, marginLeft:1.5 }}>
            Education
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EducationAndWork resource={resourceEducation} />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <WorkIcon />
          <Typography sx={{ width: '33%', flexShrink: 0, marginLeft:1.5  }}>Work Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EducationAndWork resource={resourceWork} />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
            <SentimentSatisfiedAltIcon />
          <Typography sx={{ width: '33%', flexShrink: 0, marginLeft:1.5 }}>
           Hobby
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <ContactsIcon />
          <Typography sx={{ width: '33%', flexShrink: 0, marginLeft:1.5 }}>Contact</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Contact />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
