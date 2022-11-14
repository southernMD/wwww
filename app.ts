import { simpleGit, CleanOptions } from 'simple-git';

const git = simpleGit()

const USER = 'southernMD';
const PASS = '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';
const REPO = 'github.com/southernMD/wwww.git';

const remote = `https://${USER}:${PASS}@${REPO}`;


try {
    git.
    add('./*').
    commit('2').
    push([remote], () => console.log('done'));
} catch (error) {
    console.log(error);
}


