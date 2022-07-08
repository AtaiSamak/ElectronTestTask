const download = (url: string) => {
    const path = (window as any).electronAPI.download(url);
    console.log(path);
};

export default download;
