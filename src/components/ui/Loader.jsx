import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.png';

const loaderStyles = `
  @keyframes logoBlink {
    0%, 100% {
      opacity: 0.3;
      transform: scale(0.94);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .loader-three-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg, white);
    z-index: 9999;
    pointer-events: auto;
  }

  .loader-three-container.hidden {
    animation: fadeOut 0.5s ease-out forwards;
    pointer-events: none;
  }

  .loader-logo {
    width: 82px;
    height: 82px;
    object-fit: contain;
    animation: logoBlink 1.1s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .loader-logo {
      animation: none;
    }
  }
`;

export function LoaderThree({
	isVisible: initialVisible = true,
	onLoadingComplete,
}) {
	const [isVisible, setIsVisible] = useState(initialVisible);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 3500);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (!isVisible && onLoadingComplete) {
			onLoadingComplete();
		}
	}, [isVisible, onLoadingComplete]);

	return (
		<>
			<style>{loaderStyles}</style>
			<div
				className={`loader-three-container ${!isVisible ? 'hidden' : ''}`}
				role="status"
				aria-label="Chargement du site"
			>
				<img
					className="loader-logo"
					src={logo}
					alt=""
				/>
			</div>
		</>
	);
}

export function LoaderThreeDemo() {
	return <LoaderThree />;
}
