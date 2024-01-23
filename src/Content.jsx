import { useEffect, useState } from 'react';

const lessons = [
    {
        id: 1,
        title: 'Lesson 1',
    },
    {
        id: 2,
        title: 'Lesson 2',
    },
    {
        id: 3,
        title: 'Lesson 3',
    },
];

function Content() {
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        };

        window.addEventListener(`lesson-${lessonId}`, handleComment);

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        };
    }, [lessonId]);

    return (
        <div style={{ marginTop: 20 }}>
            {lessons.map((lesson) => (
                <li
                    style={{ marginTop: 10, color: lessonId === lesson.id ? 'red' : '#333' }}
                    key={lesson.id}
                    onClick={() => setLessonId(lesson.id)}
                >
                    {lesson.title}
                </li>
            ))}
        </div>
    );
}

export default Content;
