import { useEffect, useState } from "react";
import "./Arrival.css";

export default function Arrival() {

    const [showHero, setShowHero] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {

            setShowHero(true);

        }, 4500);

        return () => clearTimeout(timer);

    }, []);

    return (

        <section className="arrival">

            {!showHero && (

                <div className="arrival-quote">

                    <p>
                        “A civilization is remembered not only by what it built,
                        but by what it chose to preserve.”
                    </p>

                </div>

            )}

            {showHero && (

                <div className="arrival-hero">

                    <div className="hero-content">

                        <span className="museum-label">
                            DIGITAL MUSEUM EXPERIENCE
                        </span>

                        <h1>
                            AURUM
                        </h1>

                        <h2>
                            MUSEUM
                        </h2>

                        <p>
                            Where India's Past Shapes Tomorrow
                        </p>

                        <button>
                            Begin the Journey →
                        </button>

                    </div>

                    <div className="hero-image">

                        {/* museum image */}

                    </div>

                </div>

            )}

        </section>

    );

}