import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { List } from "@mui/icons-material";
import { Box, ListItem, Typography } from "@mui/material";

export default function About() {
  return (
    <>
      <Accordion defaultExpanded>
        <AccordionSummary
          sx={{ fontSize: 30, fontWeight: 600, color: "#34c3ff" }}
          expandIcon={<ExpandMoreIcon />}
        >
          About this application
        </AccordionSummary>
        <AccordionDetails>
          <Box mb={5} width={500}>
            <Typography fontWeight={"800"}> Invoice Data Extraction</Typography>
            <Typography color={"gray"}>
              The application extracts open invoice data, allowing users to work
              with it efficiently
            </Typography>
          </Box>
          <Box mb={5} width={500}>
            <Typography fontWeight={"800"}> Payment Processing </Typography>
            <Typography color={"gray"}>
              Users can process payments through the application. This likely
              involves handling transactions, verifying payment details, and
              ensuring security.
            </Typography>
          </Box>
          <Box mb={5} width={500}>
            <Typography fontWeight={"800"}> Stripe Integration</Typography>
            <Typography color={"gray"}>
              The application integrates with the Stripe payment gateway, which
              is a popular choice for handling online payments. Stripe provides
              secure and reliable payment processing services.
            </Typography>
          </Box>
          <Box mb={5} width={500}>
            <Typography fontWeight={"800"}> Statistics View </Typography>
            <Typography color={"gray"}>
              The statistics view is a valuable feature. Users can get insights
              into invoice summaries, including details like total payments,
              outstanding amounts, and successful versus failed payments per
              day.
            </Typography>
          </Box>
          <Box mb={5} width={500}>
            <Typography fontWeight={"800"}>Payment History</Typography>
            <Typography color={"gray"}>
              The payment tab allows users to review their payment history. This
              feature helps track transactions, identify trends, and ensure
              accurate financial records.
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
