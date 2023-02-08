import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  InputLabel,
  Typography,
  Input,
  Button,
  Grid,
} from "@mui/material";

const ItemsList = (props) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: "56.25%",
          }}
          title="image"
          src={props.image}
          alt="image"
        />

        <CardContent>
          <Typography variant="h6">{props.name}</Typography>
          <Typography>PHP {props.price}</Typography>
        </CardContent>
      </CardActionArea>
      <Box component="form">
        <InputLabel>amount</InputLabel>
        <Input id="amount" min={0} max={5} step={1} defaultValue={0} />
        <br />
        <Button variant="contained" size="small" sx={{ margin: "10px" }}>
          +
        </Button>
        <Button variant="contained" size="small" color="error">
          -
        </Button>
      </Box>
    </Card>
  );
};

export default ItemsList;
