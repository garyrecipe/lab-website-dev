// Course Videos Data Structure
// Each course contains multiple weekly videos
export const COURSES = [
  {
    id: 'course-1',
    name: 'Materials Science',
    description: 'Introduction to materials science and engineering principles',
    videos: [
      {
        id: 'video-1-1',
        title: 'Week 1: Introduction to Materials Science',
        youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
        week: 1,
        description: 'Overview of materials science fundamentals'
      },
      {
        id: 'video-1-2',
        title: 'Week 2: Crystal Structure',
        youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
        week: 2,
        description: 'Understanding crystal structures and their properties'
      },
      // Add more videos as needed
    ]
  },
  {
    id: 'course-2',
    name: 'Metamaterials',
    description: 'Design and applications of metamaterials',
    videos: [
      {
        id: 'video-2-1',
        title: 'Week 1: Introduction to Metamaterials',
        youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
        week: 1,
        description: 'Basic concepts of metamaterials'
      },
      // Add more videos as needed
    ]
  },
  // Add more courses as needed
];

