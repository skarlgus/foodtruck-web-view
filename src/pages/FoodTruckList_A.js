import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const cardData = [
  {
    title: 'MZ의 coffee',
    subheader: '커피, 기타',
    image: 'https://www.foodtruckfriends.com/files/attach/images/2829585/169/978/007/e848426a1465a964828e0fc15f4b9923.jpg',
    description:
      '케냐에서 직접 공수한 루왁커피를 요즘 MZ세대의 입맞에 맞춰 재구성 하였습니다.',
    operatingHours: '운영시간: 매일',
    additionalInfo: 'Tel: 010-1234-3333',
  },
  {
    title: '초밥의 끝판완',
    subheader: '초밥, 기타',
    image: 'https://mblogthumb-phinf.pstatic.net/MjAyMDA3MjdfMTk1/MDAxNTk1NzkzMjc3ODQz.GgRNF_eD4AOqDNV9J0dxs7aXV8PUs1UoPb1YVoLH5gEg.M32Xmqs3SI7jrcHs2_QYZhR6DFtAbHYUHkowxJCROIog.JPEG.siy0728/%ED%91%B8%EB%93%9C%ED%8A%B8%EB%9F%AD2.jpg?type=w800',
    description:
      '신선한 재료와 전문 초밥셰프가 만드는 현지 일식 초밥을 푸드트럭에서 편안하게 즐기세요.',
    operatingHours: '운영시간: 월~금',
    additionalInfo: 'Tel: 010-1234-1111',
  },
];

const RecipeReviewCard = () => {
  const [expanded, setExpanded] = React.useState(Array(cardData.length).fill(false));

  const handleExpandClick = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {cardData.map((card, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card sx={{ width: '100%' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={card.title}
              subheader={card.subheader}
            />
            <CardMedia
              component="img"
              height="194"
              image={card.image}
              alt="Paella dish"
            />
            <CardContent sx={{ paddingTop: 0 }}>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded[index]}
                onClick={() => handleExpandClick(index)}
                aria-expanded={expanded[index]}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
              <CardContent sx={{ paddingTop: 0 }}>
                <Typography variant="body2">{card.operatingHours}</Typography>
                <Typography variant="body2">{card.additionalInfo}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeReviewCard;
