import gulp from 'gulp'
import html from './html.mjs'
import styles from './styles.mjs'
import scripts from './scripts.mjs'
import files from './files.mjs'
import images from './images.mjs'
import icons from './icons.mjs'
import { paths } from '../config.mjs'

const watcher = () => {
    gulp.watch(paths.watch.html, html)
    gulp.watch(paths.watch.styles, styles)
    gulp.watch(paths.watch.scripts, scripts)
    gulp.watch(paths.watch.files, files)
    gulp.watch(paths.watch.images, images)
    gulp.watch(paths.watch.icons, icons)
}

export default watcher
