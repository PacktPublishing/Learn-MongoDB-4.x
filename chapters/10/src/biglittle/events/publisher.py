"""
biglittle.events.publisher
Description: module that leverages PyPubSub
IMPORTANT: use "pip3" to install PyPubPub for this to work!
"""

#from pubsub import pub
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
