module.exports = {
  concurrency: 2, // Maximum number of concurrent test sessions

  reporter: [
    {
      name: 'spec', // Output in Terminal
    },
    {
      name: 'html',
      output: './reports/report.html',
    },
    {
      name: 'json',
      output: './reports/report.json',
    },
  ],

  screenshots: {
    path: './reports/screenshots',
    takeOnFails: true,
  },

  videoPath: './reports/videos/',
  videoOptions: {
    singleFile: false,
    failedOnly: true,
    pathPattern:
      '${DATE}_${TIME}/${BROWSER}/${FIXTURE}/${TEST}_${USERAGENT}.mp4',
  },
};
