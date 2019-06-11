let gulp = require('gulp');
let sftp = require('gulp-sftp');
gulp.task('default', () => {
  return gulp.src('./dist/**/*').pipe(sftp({
    host: '39.100.32.229',
    port: '22',
    user: 'root',
    pass: 'zgh1988620abc,./',
    remotePath: '/usr/share/nginx/myproject'
  }));
});
