// 課程影片資料結構
// 每個科目包含多部每週的影片
export const COURSES = [
  {
    id: 'course-1',
    name: '材料科學',
    description: '材料科學與工程原理介紹',
    videos: [
      {
        id: 'video-1-1',
        title: '第一週：材料科學導論',
        youtubeId: '808ET4MUBd0', // 請替換為實際的 YouTube 影片 ID
        week: 1,
        description: '材料科學基礎概述'
      },
      {
        id: 'video-1-2',
        title: '第二週：晶體結構',
        youtubeId: '4uyijq75tX8', // 請替換為實際的 YouTube 影片 ID
        week: 2,
        description: '了解晶體結構及其性質'
      },
      // 可依需要新增更多影片
    ]
  },
  {
    id: 'course-2',
    name: '超材料',
    description: '超材料的設計與應用',
    videos: [
      {
        id: 'video-2-1',
        title: '第一週：超材料導論',
        youtubeId: 'JH3YbgzUL-U', // 請替換為實際的 YouTube 影片 ID
        week: 1,
        description: '超材料的基本概念'
      },
      // 可依需要新增更多影片
    ]
  },
  // 可依需要新增更多科目
];

