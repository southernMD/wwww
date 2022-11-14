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
    push([remote], () => console.log('done'));
} catch (error) {
    console.log(error);
}


