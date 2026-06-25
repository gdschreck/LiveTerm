module.exports = {
  async rewrites() {
    return [
      {
        source: '/playbook',
        destination:
          'https://schreckworks-assets.s3.us-east-1.amazonaws.com/AI%20Playbook%20Infographic.png',
      },
    ];
  },
};
