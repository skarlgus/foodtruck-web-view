import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import EventNoteIcon from '@mui/icons-material/EventNote';

export default function TitlebarImageList() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  let cols = 4; // 기본 값
  if (isSmallScreen) {
    cols = 1;
  } else if (isMediumScreen) {
    cols = 2;
  } else if (isLargeScreen) {
    cols = 3;
  }

  return (
    <ImageList sx={{ width: '100%', height: 'auto' }} cols={cols} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ borderRadius: 10 }} // 이미지 아이템의 모서리를 둥글게 설정
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
              </IconButton>
            }
            sx={{ borderRadius: 2 }} // ImageListItemBar에 borderRadius 적용
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.urbanbrush.net/web/wp-content/uploads/edd/2017/11/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2017-11-04-%EC%98%A4%EC%A0%84-10.26.54.png',
    title: '한강 밤도깨비 야시장 ',
    author: '#한강, #야시장, #푸드트럭 ',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99A1983C5B82903835',
    title: '부평 깡통 야시장 ',
    author: '#부평 깡통 야시장, #먹거리, #인천 축제 ',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://www.kaupress.com/news/photo/201711/670_497_5528.jpg',
    title: '제3회 서울푸드트럭의날 행사 ',
    author: '#서울특별시 행사 주관, #어린이, #어린이날, #5월 가정의달, #축제, #공원 ',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://www.fintechtimes.co.kr/data/photos/20220521/art_16534391108272_608f9b.jpg',
    title: '토스 기업행사 푸드트럭 모집 ',
    author: '#토스, #행사, #기업, #푸드트럭',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://lh3.googleusercontent.com/proxy/fBkFhVfyqZYeIfUjhi2Ndl6VxyyDPeILawzChx4PxHrMBi5kHjM2v1mElpYOTOTy8IbE-QcwZzyp7XtPbrB866kKow8M1RonnUKNDYOj6sigLsHUd5Fp5g',
    title: '관악구 불빛거리 축제 푸드트럭 모집 ',
    author: '#신림 #불빛거리 #별빛축제 ',
    rows: 2,
    cols: 2,
    featured: true,
  },
  
];
