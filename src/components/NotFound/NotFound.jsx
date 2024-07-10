import { useState, useEffect } from 'react';
import './NotFound.css'

const NotFound = () => {
    const [catImageUrl, setCatImageUrl] = useState('');
    const [loading, setLoading] = useState(true);

    const baseUrl = 'https://raw.githubusercontent.com/aaryanporwal/sad-cat-image-collection/master/src/';

    useEffect(() => {
        const fetchRandomCatImage = async () => {
            let imageNumber;
            let foundImage = false;
            let attempts = 0;

            while (!foundImage && attempts < 683) {
                attempts++;
                imageNumber = Math.floor(Math.random() * 683) + 1;
                const url = `${baseUrl}images(${imageNumber}).jpeg`;

                try {
                    const response = await fetch(url);
                    if (response.ok) {
                        setCatImageUrl(url);
                        foundImage = true;
                    }
                } catch (error) {
                    console.error(`Image not found at ${url}`);
                }
            }

            setLoading(false);
        };

        fetchRandomCatImage();
    }, [baseUrl]);

    return (
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            {loading ? (
                <p>Loading a sad cat...</p>
            ) : catImageUrl ? (
                <img src={catImageUrl} alt="Sad cat" />
            ) : (
                <p>No sad cat found.</p>
            )}
        </div>
    );
}

export default NotFound;
