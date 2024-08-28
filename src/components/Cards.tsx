import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
  Breadcrumbs,
  Avatar,
  Tooltip,
  Button,
  Dialog,
  DialogTitle,
  Box,
} from "@mui/material";

import { config } from "./config";

import React, { useState } from "react";

interface CardProps {
  id: number;
  title: string;
  content: string;
  date: string;
  image: string;
  status: string;
  avatar: string;
  comments: number;
  label: string;
  shares: number;
  views: number;
}

export default function Component() {
  return (
    <>
      <Grid container spacing={2} p={2} >
          {config.cards.map((card) => (
        <Grid item xs={12} sm={12} md={6} mt={10}>
            <Cards
              id={card.id}
              title={card.title}
              content={card.description}
              date={card.date}
              image={card.image}
              status={card.status}
              avatar={card.avatar}
              label={card.label}
              comments={card.comments}
              shares={card.shares}
              views={card.views}
            />
        </Grid>
          ))}
      </Grid>
    </>
  );
}

function Cards(props: CardProps) {
  const {
    date,
    title,
    content,
    status,
    image,
    avatar,
    label,
    id,
    views,
    shares,
    comments,
  } = props;
  const [open, setOpen] = useState(false);
  const handleClick = (index: number) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Shares = shares / 1000 + "k";
  const Comments = comments / 1000 + "k";
  const Views = views / 1000 + "k";
  return (
    <Card sx={{height:250,
        p:1
    }}>
      <Tooltip title={label}>
        <Avatar
          src={avatar}
          style={{
            position: "absolute",
            marginTop: "1%",
            marginLeft: "42%",
            zIndex: 5,
          }}
        />
      </Tooltip>

      <Grid container spacing={2}>
        <Grid item xs={8} sm={8}>
          <CardContent>
            <Chip color={"default"} label={status} sx={{textColor:"default"}}/>

            <Typography variant="caption" color="grey" ml={20}>
              {date}
            </Typography>

            <Typography variant="subtitle1">{title}</Typography>

            <Typography variant="body2" color="grey" maxHeight={100} noWrap>
              {content}
            </Typography>

            <Breadcrumbs separator="" sx={{ p: 1, mt: "8ch" }}>
              <Button variant="text" onClick={() => handleClick(id)}>
                ...
              </Button>
              <Typography fontSize="12px" ml="10ch">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92"
                  />
                </svg>
                {Shares}
              </Typography>

              <Typography fontSize="12px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 11H7V9h2zm4 0h-2V9h2zm4 0h-2V9h2z"
                  />
                </svg>
                {Comments}
              </Typography>
              <Typography fontSize="12px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"
                  />
                </svg>
                {Views}
              </Typography>
            </Breadcrumbs>
          </CardContent>
        </Grid>
        <Grid item xs={4} sm={4} p={1}>
          <CardMedia
            component="img"
            height="240"
            image={image}
            alt="asd"
            sx={{ borderRadius: 5 }}
          ></CardMedia>
        </Grid>
      </Grid>
      {config.cards.map((card) => (
        <SimpleDialog
          onClose={handleClose}
          open={open}
          label={card.label}
          email={card.email}
          date={card.date}
          views={card.views}
          shares={card.shares}
          comments={card.comments}
        />
      ))}
    </Card>
  );
}

export interface SimpleDialogProps {
  open: boolean;
  label: string;
  email: string;
  date: string;
  views: number;
  shares: number;
  comments: number;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { open, label, email, date, views, comments, shares, onClose } = props;

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle textAlign="center">User Info</DialogTitle>
      <Box p={2}>
        <Typography>name: {label}</Typography>
        <Typography>email: {email}</Typography>
        <Typography>date: {date}</Typography>
        <Typography>views:{views}</Typography>
        <Typography>shares:{shares}</Typography>
        <Typography>comments:{comments}</Typography>
      </Box>
    </Dialog>
  );
}
