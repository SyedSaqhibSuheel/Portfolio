import React from 'react';

const ResumeButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
  link.href = 'SyedSaqhibSuheelResume.pdf'; // Ensure this path is correct
    link.download = 'SyedSaqhibSuheelResume.pdf'
    link.click();
  };

  return (
    <button className="button" onClick={handleDownload}>
      Resume Download
    </button>
  );
};

export default ResumeButton;
