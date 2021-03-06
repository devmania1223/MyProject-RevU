import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/Add";
import { Row, Item } from "@mui-treasury/components/flex";
import { Info, InfoTitle, InfoSubtitle } from "@mui-treasury/components/info";
import { useTutorInfoStyles } from "@mui-treasury/styles/info/tutor";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  action: {
    backgroundColor: "#fff",
    boxShadow: "0 1px 4px 0 rgba(0,0,0,0.12)",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
  },
}));

export default React.memo(function TutorCard() {
  const styles = useStyles();
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 6 });
  const avatarStyles = useDynamicAvatarStyles({ radius: 12, size: 48 });
  return (
    <Row
      width={280}
      marginTop={1}
      marginRight={1}
      p={1.5}
      gap={2}
      bgcolor={"#f5f5f5"}
      borderRadius={10}
    >
      <Item>
        <Avatar
          classes={avatarStyles}
          src={
            "https://www.biography.com/.image/t_share/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg"
          }
        />
      </Item>
      <Info position={"middle"} useStyles={useTutorInfoStyles}>
        <InfoTitle>Kenny Foster</InfoTitle>
        <InfoSubtitle>900 Points</InfoSubtitle>
      </Info>
      <Item ml={1} position={"middle"}>
        {/* <IconButton className={styles.action} classes={iconBtnStyles}>
          <Add />
        </IconButton> */}
        <Button variant="outlined" color="primary">
          Hire
        </Button>
      </Item>
    </Row>
  );
});
