import Input from '@mui/material/Input';
import React from 'react';
import Image from 'next/image'
import placeholder from '../../assets/images/placeholder.png';

function InputFile({ onChange, editableSrc, ...props }) {
  const inputRef = React.createRef(null);
  const [src, setSrc] = React.useState(null);

  /**
   * ESTUDIA: Solo funciona con [editableSrc], con [] , editableSrc llega como null
   */

  React.useEffect(() => {
    editableSrc && setSrc(editableSrc);
  }, [editableSrc])

  const loadSrcFromFile = file => {
    if (!file) {
      setSrc(null);
      return;
    }
    /**
     * FileReader.onload property contains an event handler executed when the 
     * FileReader.load_event event is fired, when content read with readAsArrayBuffer,
     *  readAsBinaryString, **readAsDataURL** or readAsText is available
     */
    const reader = new FileReader();
    reader.onload = function () {
      setSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = ev => {
    const file = ev.target.files[0];
    loadSrcFromFile(file);
    onChange(ev);
  };

  return (
    <div >
      <input
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleChange}
        {...props}
      />
      <Image
        onClick={handleClick}
        src={src || placeholder}
        alt=""
        width="200"
        height="200"
      // style={{ objectFit: 'contain' }}
      />

    </div >
  );
}

export default InputFile;
