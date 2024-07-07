import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function TitlebarImageList() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  let cols = 4; // 기본 값
  if (isSmallScreen) {
    cols = 1;
  } else if (isMediumScreen) {
    cols = 2;
  } else {
    cols = Math.floor(window.innerWidth / 300); // 화면 크기에 따라 동적으로 계산
  }

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // 0.5초 후 로딩 상태 해제

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageList sx={{ width: '100%', height: 'auto' }} cols={cols} gap={8}>
      {itemData.map((item, index) => (
        <ImageListItem key={index} cols={item.cols || 1} rows={item.rows || 1}>
          {loading ? (
            <Stack sx={{ width: '100%', height: '100%' }} alignItems="center" justifyContent="center">
              <Skeleton variant="rectangular" width="100%" height={180} />
            </Stack>
          ) : (
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ borderRadius: 10, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
          <ImageListItemBar
            title={loading ? <Skeleton variant="text" width="80%" /> : item.title}
            subtitle={loading ? <Skeleton variant="text" width="60%" /> : item.author}
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
    img: 'https://cdn.onseoul.net/news/photo/202012/10096_10072_831.jpg',
    title: '별빛축제 푸드트럭 모집 ',
    author: '#강남 #대청역 #일원나눔한마당 ',
    rows: 2,
    cols: 2,
    featured: true,
  },
];
