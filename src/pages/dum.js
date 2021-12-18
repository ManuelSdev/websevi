import React, { useRef } from "react";

export default function Home() {
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });
    return (
        <div >
            <main>
                <lottie-player
                    id="firstLottie"
                    ref={ref}
                    autoplay
                    //controls
                    loop
                    mode="normal"
                    src="https://assets6.lottiefiles.com/packages/lf20_egicfodc.json"
                    style={{ width: "600px", height: "600px" }}
                ></lottie-player>
            </main>
        </div>
    );
}