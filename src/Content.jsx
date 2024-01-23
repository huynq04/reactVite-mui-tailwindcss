import { useEffect, useState } from 'react';

function Content() {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        return () => avatar && URL.revokeObjectURL(avatar.preview);
    }, [avatar]);

    const handleFile = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);

        setAvatar(file);
    };

    return (
        <div>
            <input type="file" onChange={handleFile} />
            {avatar && <img src={avatar.preview} alt="" width="80%" />}
        </div>
    );
}

export default Content;
