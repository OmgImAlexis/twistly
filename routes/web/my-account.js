const Router = require('koa-router');
const render = require('koa-views-render');

const { policies } = require('../../helpers');
const { api } = require('../../app/controllers');

const router = new Router({ prefix: '/my-account' });

router.use(policies.ensureLoggedIn);
router.get('/', render('my-account'));
router.put('/', api.v1.users.update);
router.get('/api', render('my-account/api'));
router.get('/security', render('my-account/security'));

module.exports = router;
