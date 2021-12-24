{
  "name": "argon-theme",
  "description": "A light, simple and beautiful WordPress theme",
  "homepage": "https://solstice23.top/argon",
  "keywords": [
    "argon",
    "theme",
    "argon-theme",
    "wordpress"
  ],
  "repository": {
    "type": "git",
    "url": "git@github.com:solstice23/argon-theme.git"
  },
  "license": "GPL-3.0",
  "autoupdate": {
    "source": "git",
    "target": "git://github.com/solstice23/argon-theme.git",
    "fileMap": [
      {
        "basePath": "",
        "files": [
          "argontheme.js"
        ]
      },
      {
        "basePath": "assets",
        "files": [
          "*.js",
          "*.css",
          "css/*.css",
          "js/*.js",
          "tinymce_assets/*.svg",
          "tinymce_assets/*.js",
          "tinymce_assets/*.css",
          "vendor/*/*.js",
          "vendor/*/*/*.js",
          "vendor/*/*.css",
          "vendor/*/*/*.css",
          "vendor/*/*.svg"
        ]
      }
    ]
  },
  "authors": [
    {
      "name": "solstice23",
      "email": "solstice233@gmail.com@gmail.com",
      "url": "https://solstice23.top"
    }
  ]
}
