"""
biglittle.events.publisher
Description: module that leverages pubsub
IMPORTANT: use "pip3" to install pubsub for this to work!
"""

import pubsub

class Publisher :

    EVENT_LOAN_UPDATE_BORROWER = 'event-loan-update-borrower'

    """
    Attaches a subscriber to a topic
    @param string topic
    @param callable listener
    @return void
    """
    def attach(self, topic, listener) :
        pubsub.subscribe(listener, topic)

    """
    Sends message about topic
    @param string topic
    @param object obj
    @return void
    """
    def trigger(self, topic, obj) :
        pubsub.sendMessage(topic, arg=obj)
