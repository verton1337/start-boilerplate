import gulp from 'gulp'
import gulpServer from 'gulp-server-livereload'
import { paths } from '../config.mjs'

const serverConfig = {
    livereload: true,
    open: true
}

const server = () => {
    return gulp
        .src(paths.dist._)
        .pipe(gulpServer(serverConfig))
}

export default server
