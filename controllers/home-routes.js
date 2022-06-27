const router = require('express').Router();
const authorized = require('../utils/authorized')

const { User, Client, Service } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', { loggedIn: req.user });    
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/sign-up', (req, res) => {
    res.render('sign-up');
});

router.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
});

router.get('/scheduler', authorized, (req, res) => {
    async function getClient() {
        const client = await Client.findOne({ 
            where: { user_id: req.user.id },
            include: [
                { 
                    model: User,
                    attributes: ['email']
                }
            ]
        });
        return client.dataValues;
    }

    async function getServices() {
        const services = await Service.findAll({
            order: [ ['name', 'ASC'] ]
        });
        return services.map(service => service.dataValues);
    }
    
    async function renderPage() {
        try {
            const client = await getClient();
            const services = await getServices();
            res.render('scheduler', {
                loggedIn: req.user,
                client,
                services
            })
        } catch (error) {
            console.log(error);
            res.redirect('/');
        }
        
        // console.log(services, client);
        
        
    }
    
    renderPage();
});

module.exports = router;