import { simpleGit, CleanOptions } from 'simple-git';

const git = simpleGit()

const USER = 'southernMD';
const PASS = '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';
const REPO = 'github.com/southernMD/wwww.git';

const remote = `https://${USER}:${PASS}@${REPO}`;


try {
    git.init().
    add('./*').
    commit('1').
    addRemote('origin', remote).
    push(['--set-upstream', 'origin', 'main'], () => console.log('done'));
} catch (error) {
    console.log(error);
}


